import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import axios from "axios";
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [resultMessage, setResultMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setResultMessage(null);

    // Try to send via EmailJS. Requires the following env vars to be set in your Vite env:
    // VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const RECIPIENT = import.meta.env.VITE_CONTACT_RECIPIENT ?? "email.teamkonteh@gmail.com";

    const templateParams = {
      ...formData,
      to_email: RECIPIENT
    } as Record<string, any>;

    if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
      try {
        // Use EmailJS REST API: https://api.emailjs.com/api/v1.0/email/send
        // Build payload expected by EmailJS
        const payload = {
          service_id: SERVICE_ID,
          template_id: TEMPLATE_ID,
          user_id: PUBLIC_KEY,
          template_params: templateParams
        } as Record<string, any>;

        const resp = await axios.post(
          "https://api.emailjs.com/api/v1.0/email/send",
          payload,
          { headers: { "Content-Type": "application/json" } }
        );

        console.info("EmailJS response status:", resp.status, resp.data);
        if (resp.status === 200) {
          setIsSubmitted(true);
          setResultMessage("Your request was sent successfully.");
        } else {
          setResultMessage(`Unexpected EmailJS response: ${resp.status}`);
        }
      } catch (err: any) {
        console.error("EmailJS error (axios):", err);
        const message = err?.response?.data || err?.message || String(err);
        setResultMessage(`There was a problem sending your request: ${JSON.stringify(message)}`);
      }
    } else {
      // Fallback: no EmailJS configured — log data and show instructive message
      // This prevents breaking the build if the package isn't installed or env vars are missing.
      // To enable real email sending, install `@emailjs/browser` and add the Vite env vars.
      // Example: `npm install @emailjs/browser` and set env in `.env`:
      // VITE_EMAILJS_SERVICE_ID=your_service_id
      // VITE_EMAILJS_TEMPLATE_ID=your_template_id
      // VITE_EMAILJS_PUBLIC_KEY=your_public_key
      // In EmailJS dashboard, create a template that sends to `email.ncsgambia@gmail.com`.
      // For now we'll just log the payload.
      // eslint-disable-next-line no-console
      console.log("EmailJS not configured — form payload:", templateParams);
      setIsSubmitted(true);
      setResultMessage("EmailJS not configured — form data logged to console.");
    }

    setIsSending(false);

    // Reset form after short delay if submitted
    if (isSubmitted || resultMessage) {
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          time: "",
          message: ""
        });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-red-50 via-white to-rose-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-4">Book a Consultation</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Schedule your appointment today and let us bring quality healthcare to your doorstep
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-red-100">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl text-gray-900 mb-3">Thank You!</h3>
                <p className="text-gray-600">
                  Your consultation request has been received. We'll contact you shortly to confirm your appointment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="h-4 w-4 text-red-600" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name "
                      className="border-gray-300 focus:border-red-600 focus:ring-red-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-red-600" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="border-gray-300 focus:border-red-600 focus:ring-red-600"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-red-600" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+220 3344551"
                      className="border-gray-300 focus:border-red-600 focus:ring-red-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">
                      Service Required *
                    </Label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
                    >
                      <option value="">Select a service</option>
                      <option value="disease-prevention">Disease Prevention</option>
                      <option value="corporate-package">Corporate Package</option>
                      <option value="wound-care">Wound Care</option>
                      <option value="chronic-disease">Chronic Disease Management</option>
                      <option value="elderly-care">Elderly Care</option>
                      <option value="palliative-care">Palliative and Hospice Care</option>
                      <option value="ad-hoc">Ad Hoc Services</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-red-600" />
                      Preferred Date *
                    </Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-red-600 focus:ring-red-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time" className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-red-600" />
                      Preferred Time *
                    </Label>
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-red-600 focus:ring-red-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-red-600" />
                    Additional Information
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide any additional details about your consultation request..."
                    className="border-gray-300 focus:border-red-600 focus:ring-red-600 resize-none"
                  />
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <p className="text-sm text-gray-700">
                    By submitting this form, you agree to our privacy policy. We will contact you within 24 hours to confirm your appointment.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  Book Consultation
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

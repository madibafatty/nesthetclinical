import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Ya Fatou Aziz",
      role: "Patient - Chronic Disease Management",
      content: "Nesthet provided exceptional 24/7 home care for my 99-year-old grandfather. Their team was compassionate, reliable, and highly skilled. The care was personalized to his needs, and the staff displayed consistent professionalism. We are deeply grateful for the comfort and support they provided.",
      rating: 5
    },
    {
      name: "Haddy Sonko",
      role: "Family Member - Elderly Care",
      content: "I am truly grateful for the excellent service and continuous support your team has provided for both my parents. Your care, professionalism, and dedication mean so much to us. Thank you for everything.",
      rating: 5
    },
    {
      name: "Abdoulie Ceesay",
      role: "Client -Bronx, USA",
      content: "My experience with your home nursing services for my mom has been outstanding. Your team provided compassionate, patient, and reliable care that brought tremendous comfort to our entire family. The nurses treated my mom with dignity and kindness, and their professionalism gave us peace of mind every single day. It truly felt like she was in safe, caring hands.",
      rating: 5
    },
    // {
    //   name: "Gambia Chamber of Commerce",
    //   role: "Corporate Partner",
    //   content: "We've partnered with Nesthet for our corporate healthcare package. The convenience of on-site health screenings and the quality of care has significantly improved our employee wellness program. Highly recommended!",
    //   rating: 5
    // },
    // {
    //   name: "Omar Ceesay",
    //   role: "Patient - Wound Care",
    //   content: "After my surgery, Nesthet provided exceptional wound care at home. The specialist attention I received helped me recover faster and without complications. Their service is truly professional.",
    //   rating: 5
    // },
    // {
    //   name: "Ministry of Health Partnership",
    //   role: "Government Partner",
    //   content: "Nesthet Clinical Services has been instrumental in extending healthcare access to remote communities. Their commitment to affordability and quality aligns perfectly with our national health goals.",
    //   rating: 5
    // }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Testimonials from our valued clients and partners
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-red-100"
            >
              <Quote className="h-10 w-10 text-red-200 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="border-t border-red-100 pt-4">
                <p className="text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
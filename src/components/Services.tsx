import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Baby, Building2, Bandage, Activity, HeartPulse, Pill, Stethoscope } from "lucide-react";
import { Button } from "./ui/button";

export function Services() {
  const services = [
    {
      icon: Baby,
      title: "Disease Prevention",
      description: "Focus on preventing chronic diseases through dietary advice, regular checkups, and healthy living habits.",
      target: "Parents providing children ages 5-17",
      image: "images/test.jpeg"
    },
    {
      icon: Building2,
      title: "Corporate Package",
      description: "Healthcare for organizations to provide their staff, through care in the event of illness, early diagnosis by optional regular health checks and screening, and prevention.",
      target: "Employers providing for their staff",
      image: "images/consultancy.jpeg"
    },
    {
      icon: Bandage,
      title: "Wound Care",
      description: "Specialist wound care including burns, cavity wounds and clean surgical wounds with expert medical attention.",
      target: "All ages requiring wound care",
      image: "images/wound.jpeg"
    },
    {
      icon: Activity,
      title: "Chronic Disease Management",
      description: "Provide coordinated care for chronic illnesses, including hypertension, sickle cell and diabetes, through lifestyle and medication management.",
      target: "Patients with chronic diseases",
      image: "images/string.jpeg"
    },
    {
      icon: HeartPulse,
      title: "Elderly Care",
      description: "Support elderly individuals with or without chronic illnesses in performing daily activities with 6 to 24-hour care options.",
      target: "Ages 50 upwards",
      image: "images/merr1.jpg"
    },
    {
      icon: Pill,
      title: "Palliative and Hospice Care",
      description: "Provide compassionate care for patients with terminal illnesses, focusing on pain management, quality of life and maintaining dignity.",
      target: "Terminally ill patients",
      image: "images/bed.jpeg"
    },
    {
      icon: Stethoscope,
      title: "Ad Hoc Services",
      description: "Additional services to complement our core offerings: physiotherapy, IV therapy, medical checkups, surgery facilitation, and medication delivery.",
      target: "All ages as needed",
      image: "images/patient1.jpeg"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare services designed to meet the needs of clients from ages 5 through the elderly
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-red-100 rounded-xl overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white w-12 h-12 rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                    <p className="text-sm text-red-700">
                      <span className="font-semibold">Target: </span>
                      {service.target}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" onClick={() => {
            const element = document.getElementById("contact");
            if (element) element.scrollIntoView({ behavior: "smooth" });
          }} className="bg-red-600 hover:bg-red-700">
            Request a Service
          </Button>
        </div>
      </div>
    </section>
  );
}
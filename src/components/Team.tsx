import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Linkedin, Mail } from "lucide-react";

export function Team() {
  const teamMembers = [
    {
      name: "Mr. Lamin Jafuneh",
      role: "Co-Founder & Chief Executive officer",
      image: "images/jafuneh1.png",
      // bio: "With over 10 years of experience in community healthcare, Dr. Jallow founded Nesthet to bring quality care to underserved communities."
    },
    {
      name: "Olimatou Bojang",
      role: "Co-Founder and Executive Manager",
      image: "images/bojang.jpg",
      // bio: "Leading our nursing team with expertise in home healthcare and chronic disease management."
    },
    {
      name: "Dr. Baboucarr Dibba",
      role: "Data Scientist",
      image: "images/dibba.jpeg",
      // bio: "Ensuring seamless service delivery and operational excellence across all our healthcare programs."
    },
    {
      name: "Dr. Awa Jah",
      role: "Head of Clinical Services",
      image: "images/awa.jpg",
      // bio: "Ensuring seamless service delivery and operational excellence across all our healthcare programs."
    },

     {
      name: "Dr. Richel Rodriguez",
      role: "Field Doctor",
      image: "images/richal.jpeg",
      // bio: "Ensuring seamless service delivery and operational excellence across all our healthcare programs."
    },
    
    {
      name: "Kaddijatou Manneh",
      role: "Field Supervisor",
      image: "images/mariam.jpg",
      // bio: "Specializing in geriatric care with a compassionate approach to supporting our elderly clients."
    },
    {
      name: "Kanni Njie",
      role: "Field Supervisor",
      image: "images/kanni.jpg",
      // bio: "Ensuring seamless service delivery and operational excellence across all our healthcare programs."
    },
   
    
   
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 mb-4">Meet Our Team</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our dedicated professionals are committed to delivering exceptional healthcare services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-gray-900 mb-1">{member.name}</h3>
                <p className="text-red-600 mb-3">{member.role}</p>
                {/* <p className="text-gray-600 text-sm mb-4">{member.bio}</p> */}
                <div className="flex gap-3">
                  <button className="p-2 bg-red-50 hover:bg-red-100 rounded-lg transition-colors">
                    <Linkedin className="h-4 w-4 text-red-600" />
                  </button>
                  <button className="p-2 bg-red-50 hover:bg-red-100 rounded-lg transition-colors">
                    <Mail className="h-4 w-4 text-red-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
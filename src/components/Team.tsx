import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Linkedin, Mail } from "lucide-react";

export function Team() {
  const teamMembers = [
    {
      name: "Dr. Amina Jallow",
      role: "Founder & Chief Medical Officer",
      image: "https://images.unsplash.com/photo-1632054229795-4097870879b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwaGVhbHRoY2FyZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjM3MTQ3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "With over 10 years of experience in community healthcare, Dr. Jallow founded Nesthet to bring quality care to underserved communities."
    },
    {
      name: "Fatou Ceesay",
      role: "Director of Nursing Services",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
      bio: "Leading our nursing team with expertise in home healthcare and chronic disease management."
    },
    {
      name: "Lamin Sarr",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
      bio: "Ensuring seamless service delivery and operational excellence across all our healthcare programs."
    },
    {
      name: "Isatou Manneh",
      role: "Head of Elderly Care",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "Specializing in geriatric care with a compassionate approach to supporting our elderly clients."
    }
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
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
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
import { Award, Heart, Shield, Lightbulb, Users } from "lucide-react";

export function Values() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering the highest standard of care through skilled professionals."
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "Treating all patients with dignity, respect, and empathy."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Operating with transparency, honesty, and ethical practices."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leveraging new technologies to improve patient care."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working with patients, families, and healthcare teams for coordinated care."
    }
  ];

  return (
    <section id="values" className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 mb-4">Our Core Values</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            These fundamental principles guide everything we do at Nesthet Clinical Services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 max-w-md mx-auto"
              >
                <div className="bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
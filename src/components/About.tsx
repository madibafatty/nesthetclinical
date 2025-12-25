import { Target, Eye, Lightbulb, DollarSign, Award, Home, Lock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="bg-white">
      {/* Story Section - Full Width Two Column */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="/images/mariama.jpg"
                  alt="Healthcare Professional"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-red-600 to-rose-700 text-white p-8 rounded-xl shadow-lg max-w-xs">
                <div className="text-4xl mb-2">10+</div>
                <div className="text-sm">Years of Dedicated Healthcare Service</div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-4xl text-gray-900 mb-4">Our Story</h2>
                <div className="w-20 h-1 bg-red-600 mb-6"></div>
              </div>
              
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Born from Compassion <br />
Nesthet Clinical Services was inspired by three years of Witnessing preventable suffering in the rural Gambia. Seeing women, children and elderly enduring huge challenges to access basic essential healthcare services, often resulting in tragic outcomes
                </p>
                <p>
                  Driven by Purpose <br />
The call to action came after hearing about the first maternal death at Farato Health Post in 2014. This entrepreneurial drive gave birth to Nesthet. A personalized in-home care provider to make home healthcare accessible, personalized and stress free
                </p>
                <p>
                  Today, we continue to serve our community with unwavering dedication, ensuring that quality healthcare is accessible to everyone, regardless of their location or circumstances.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <div className="text-2xl text-red-600 mb-1">2015</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <div className="text-2xl text-red-600 mb-1">1000+</div>
                  <div className="text-sm text-gray-600">Lives Touched</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision, Mission, Goal */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gradient-to-br from-red-600 to-rose-700 p-8 rounded-2xl text-white">
              <div className="bg-white/20 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="text-2xl mb-4">Vision</h3>
              <p>Making modern quality home healthcare services accessible and affordable to underserved communities in Gambia and beyond by leveraging technology.</p>
            </div>

            <div className="bg-gradient-to-br from-rose-700 to-red-800 p-8 rounded-2xl text-white">
              <div className="bg-white/20 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="text-2xl mb-4">Mission</h3>
              <p>To provide access to affordable high quality of home healthcare services in The Gambia and beyond, supporting clients to cope, adapt, and recover from stressful health events.</p>
            </div>

            <div className="bg-gradient-to-br from-red-800 to-rose-900 p-8 rounded-2xl text-white">
              <div className="bg-white/20 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="h-7 w-7" />
              </div>
              <h3 className="text-2xl mb-4">Goal</h3>
              <p>Our target is to ensure that 90% of the population can access high quality healthcare at home, at a costs affordable to 80% of Gambians by 2028, anytime and anywhere.</p>
            </div>
          </div>

          {/* Unique Value Proposition */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl text-gray-900 mb-4">What Makes Us Unique</h2>
              <div className="w-20 h-1 bg-red-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-red-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">Affordability</h3>
                <p className="text-gray-600">Services at a cost affordable to the average Gambian, with profits reinvested in community initiatives.</p>
              </div>

              <div className="bg-white border border-red-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">High Quality</h3>
                <p className="text-gray-600">Latest techniques and leveraging technology where appropriate for superior care.</p>
              </div>

              <div className="bg-white border border-red-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">Convenience</h3>
                <p className="text-gray-600">Bringing healthcare directly to the client's doorstep, eliminating travel barriers.</p>
              </div>

              <div className="bg-white border border-red-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">Privacy & Peace of Mind</h3>
                <p className="text-gray-600">Delivering services at the comfort of client's home with high-quality care you can trust.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ArrowRight, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1758691462321-9b6c98c40f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwcGF0aWVudCUyMGhvbWV8ZW58MXx8fHwxNzYzNzE1MzI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Home Healthcare Services"
    },
    {
      image: "https://images.unsplash.com/photo-1676552055618-22ec8cde399a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzZSUyMGNhcmluZyUyMGVsZGVybHl8ZW58MXx8fHwxNzYzNjQyMzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Nurse Caring for Elderly"
    },
    {
      image: "https://images.unsplash.com/photo-1536064479547-7ee40b74b807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY29uc3VsdGF0aW9uJTIwYWZyaWNhfGVufDF8fHx8MTc2MzcxNTMyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Medical Consultation"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-24 pb-20 bg-gradient-to-br from-red-50 via-white to-rose-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Serving The Gambia Since 2015</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl text-gray-900">
              Quality Home Healthcare at Your Doorstep
            </h1>
            
            <p className="text-xl text-gray-600">
              Making modern quality healthcare services accessible and affordable to underserved communities in The Gambia and beyond by leveraging technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => scrollToSection("services")} className="group bg-red-600 hover:bg-red-700">
                Our Services
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("about")} className="border-red-200 text-red-700 hover:bg-red-50">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl text-red-600">90%</div>
                <div className="text-sm text-gray-600">Target Population Access</div>
              </div>
              <div>
                <div className="text-3xl text-red-600">80%</div>
                <div className="text-sm text-gray-600">Affordability Goal</div>
              </div>
              <div>
                <div className="text-3xl text-red-600">2028</div>
                <div className="text-sm text-gray-600">Target Year</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <ImageWithFallback 
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              
              {/* Slider Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
              >
                <ChevronLeft className="h-6 w-6 text-gray-800" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
              >
                <ChevronRight className="h-6 w-6 text-gray-800" />
              </button>

              {/* Slider Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-sm text-gray-600">Established</div>
              <div className="text-2xl text-gray-900">2015</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

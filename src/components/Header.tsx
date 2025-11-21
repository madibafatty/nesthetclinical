import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <div className="bg-red-600 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white fill-white" />
            </div> */}
            {/* <div>
              <div className="text-gray-900">Nesthet Clinical Services</div>
              <div className="text-xs text-gray-600">Est. 2015</div>
            </div> */}

             <div className="flex items-center">
            <button onClick={() => scrollToSection("hero")} className="flex items-center space-x-2">
              <img
                src="/images/logo.jpeg"
                alt="Nesthet Clinical Logo"
                style={{ width: 110, height: 40, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
              />
              {/* <span className="text-gray-900">Nesthet Clinical</span> */}
            </button>
          </div>


          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-red-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("values")} className="text-gray-700 hover:text-red-600 transition-colors">
              Values
            </button>
            <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-red-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("team")} className="text-gray-700 hover:text-red-600 transition-colors">
              Team
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="text-gray-700 hover:text-red-600 transition-colors">
              Testimonials
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-red-600 hover:bg-red-700">Contact Us</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-red-600 transition-colors text-left">
              About
            </button>
            <button onClick={() => scrollToSection("values")} className="text-gray-700 hover:text-red-600 transition-colors text-left">
              Values
            </button>
            <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-red-600 transition-colors text-left">
              Services
            </button>
            <button onClick={() => scrollToSection("team")} className="text-gray-700 hover:text-red-600 transition-colors text-left">
              Team
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="text-gray-700 hover:text-red-600 transition-colors text-left">
              Testimonials
            </button>
            <Button onClick={() => scrollToSection("contact")} className="w-full bg-red-600 hover:bg-red-700">Contact Us</Button>
          </nav>
        )}
      </div>
    </header>
  );
}
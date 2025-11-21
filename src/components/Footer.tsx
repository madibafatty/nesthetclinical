import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Footer() {
  return (
    <footer id="contact-info" className="bg-gradient-to-br from-red-900 to-rose-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white p-2 rounded-lg">
                <Heart className="h-6 w-6 text-red-600 fill-red-600" />
              </div>
              <div>
                <div>Nesthet Clinical Services</div>
                <div className="text-xs text-red-200">Est. 2015</div>
              </div>
            </div>
            <p className="text-red-100 mb-6">
              Making modern quality healthcare services accessible and affordable to underserved communities in The Gambia.
            </p>
            <div className="flex gap-3">
              <button className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Linkedin className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById("about");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-red-100 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById("services");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-red-100 hover:text-white transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById("team");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-red-100 hover:text-white transition-colors"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById("testimonials");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-red-100 hover:text-white transition-colors"
                >
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-red-300 mt-1 flex-shrink-0" />
                <span className="text-red-100">Banjul, The Gambia</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-red-300 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-red-100">+220 XXX XXXX</div>
                  <div className="text-sm text-red-200">Available 24/7</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-red-300 mt-1 flex-shrink-0" />
                <span className="text-red-100">info@nesthetclinical.gm</span>
              </li>
            </ul>
          </div>

          {/* Newsletter was removed per design; three columns are evenly spaced now */}
        </div>

        <div className="border-t border-red-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-red-200 text-sm">
              © 2025 Nesthet Clinical Services. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-red-200 hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="text-red-200 hover:text-white transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
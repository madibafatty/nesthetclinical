import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Values } from "./components/Values";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Values />
      <Services />
      <Team />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
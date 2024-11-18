import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedTrip from "../components/FeaturedTrip";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedTrip />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
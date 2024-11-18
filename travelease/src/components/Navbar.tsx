import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-primary">TravelEase</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#featured" className="text-gray-700 hover:text-primary transition-colors">Featured Trip</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#featured" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Featured Trip</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
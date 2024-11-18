const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TravelEase</h3>
            <p className="text-gray-300">
              Your trusted partner for unforgettable journeys from Malaysia to Singapore.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p>Email: info@travelease.com</p>
              <p>Phone: +60 12-345 6789</p>
              <p>Address: Kuala Lumpur, Malaysia</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 TravelEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
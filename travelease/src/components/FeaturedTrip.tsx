import { Calendar, Clock, MapPin } from "lucide-react";

const FeaturedTrip = () => {
  return (
    <section id="featured" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Journey: Malaysia to Singapore
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Calendar className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-xl mb-2">5 Days, 4 Nights</h3>
                <p className="text-gray-600">
                  Perfect duration to explore Singapore's highlights
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-xl mb-2">Key Destinations</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Marina Bay Sands</li>
                  <li>Gardens by the Bay</li>
                  <li>Sentosa Island</li>
                  <li>Universal Studios</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-xl mb-2">Next Available Date</h3>
                <p className="text-gray-600">
                  Departing every Friday from Kuala Lumpur
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1574227492706-f65b24c3688a?auto=format&fit=crop&q=80"
              alt="Singapore Attractions"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-lg font-semibold">Starting from</p>
              <p className="text-3xl font-bold text-primary">MYR 2,499</p>
              <p className="text-sm text-gray-600">per person</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTrip;
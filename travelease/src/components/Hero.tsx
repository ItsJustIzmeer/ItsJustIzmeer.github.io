const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80"
          alt="Singapore Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover the Magic of Singapore
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Your journey from Malaysia begins here
          </p>
          <a
            href="#featured"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            Explore Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
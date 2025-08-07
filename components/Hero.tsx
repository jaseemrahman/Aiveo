
'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      title: "Design. Develop. Dominate.",
      subtitle: "Empowering your brand with AI‑driven design, seamless development, and market‑leading innovation."
    },
    {
      title: "AI-Powered. Premium Quality. Exceptional Results.",
      subtitle: "AI‑powered design and intelligent development that transforms visions into industry‑defining dominance."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20abstract%20geometric%20pattern%20background%20in%20black%20and%20white%2C%20minimalist%20monochrome%20design%20with%20elegant%20lines%20and%20shapes%2C%20professional%20corporate%20backdrop%20with%20subtle%20gradients%2C%20clean%20architectural%20elements%20and%20flowing%20curves%2C%20sophisticated%20black%20and%20white%20abstract%20composition%20with%20smooth%20transitions%20and%20contemporary%20design%20elements%2C%20premium%20business%20presentation%20style&width=1920&height=1080&seq=bw-abstract-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/90"></div>
      </div>
      
      <div className="relative z-10 w-full min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="text-left max-w-4xl">
            <div className="mb-8">
              <h1 className="text-7xl lg:text-9xl font-bold text-black mb-4 tracking-tight">
                <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent font-light">
                  AI
                </span>
                <span className="font-bold text-black">VEO</span>
              </h1>
              <div className="w-24 h-1 bg-black mb-6"></div>
            </div>
            
            <div className="relative h-32 lg:h-40 mb-8">
              {banners.map((banner, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 transform ${
                    currentBanner === index 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <h2 className="text-3xl lg:text-5xl font-light text-gray-800 tracking-wide leading-tight">
                    {banner.title.split('.').map((part, i) => (
                      <span key={i}>
                        {i === 1 ? <span className="font-medium">{part}.</span> : part + (i < 2 ? '. ' : '')}
                        {i === 0 && <br />}
                      </span>
                    ))}
                  </h2>
                </div>
              ))}
            </div>
            
            <div className="relative h-24 lg:h-28 mb-12">
              {banners.map((banner, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 transform ${
                    currentBanner === index 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl font-light">
                    {banner.subtitle}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <button
                onClick={scrollToContact}
                className="bg-black hover:bg-gray-800 text-white px-12 py-5 text-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer whitespace-nowrap border-2 border-black hover:border-gray-800"
              >
                Get in Touch
              </button>
              
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="w-12 h-px bg-gray-400"></div>
                <span className="text-sm font-medium tracking-wider uppercase">Trusted by Industry Leaders</span>
              </div>
            </div>

            <div className="flex space-x-2 mt-8">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBanner(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    currentBanner === index ? 'bg-black' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

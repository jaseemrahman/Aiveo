
'use client';

export default function Footer() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <h3 className="text-4xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent font-light">
                  AI
                </span>
                <span className="font-bold text-white">VEO</span>
              </h3>
              <div className="w-16 h-1 bg-white mt-2"></div>
            </div>
            <p className="text-gray-400 leading-relaxed">
            Design. Develop. Dominate.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <div className="space-y-4">
              <button 
                onClick={scrollToServices}
                className="block text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Services
              </button>
              <button 
                onClick={scrollToContact}
                className="block text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-mail-line"></i>
                </div>
                <span>aiveoglobal@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-phone-line"></i>
                </div>
                <span>+971-123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center mt-1">
                  <i className="ri-map-pin-line"></i>
                </div>
                <span className="leading-relaxed">
                  Sheikh Zayed Road, Al Wasl,<br />
                  Dubai, United Arab Emirates
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025. All rights reserved.</p>
          <p className="mt-2">
            <span className="font-bold tracking-tight">
              <span className="bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 bg-clip-text text-transparent font-light">
                AI
              </span>
              <span className="font-bold text-gray-400">VEO</span>
            </span>
            {' '}Technologies
          </p>
        </div>
      </div>
    </footer>
  );
}


'use client';

export default function Services() {
  const services = [
    {
      icon: 'ri-brain-line',
      title: 'AI-Powered Web Development',
      description: 'Intelligent web applications enhanced with machine learning capabilities and AI-driven user experiences.'
    },
    {
      icon: 'ri-robot-line',
      title: 'Smart Mobile Applications',
      description: 'Next-generation mobile apps with AI integration, predictive analytics, and intelligent automation.'
    },
    {
      icon: 'ri-magic-line',
      title: 'AI-Enhanced UI/UX Design',
      description: 'Data-driven design solutions powered by AI insights for optimal user engagement and conversion.'
    },
    {
      icon: 'ri-cpu-line',
      title: 'Machine Learning Integration',
      description: 'Custom ML models and AI algorithms seamlessly integrated into your business applications.'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Intelligent Business Solutions',
      description: 'Premium AI-powered software that automates processes and delivers exceptional business intelligence.'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">Our AI Services</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We specialize in premium AI-powered digital solutions that combine cutting-edge artificial intelligence 
            with exceptional quality. Our expertise in machine learning, intelligent automation, and AI-driven 
            development helps businesses achieve unprecedented growth and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <i className={`${service.icon} text-2xl text-black`}></i>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

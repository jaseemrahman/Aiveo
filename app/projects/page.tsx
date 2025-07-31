
'use client';

import Link from 'next/link';
import { useState } from 'react';

const allProjects = [
  {
    title: 'StartEx Hub',
    description: 'A comprehensive startup ecosystem platform connecting entrepreneurs, investors, and mentors with AI-powered matching algorithms.',
    tech: 'Next.js, React, TypeScript',
    image: 'https://readdy.ai/api/search-image?query=Modern%20startup%20ecosystem%20platform%20interface%20with%20entrepreneurs%20collaborating%2C%20professional%20business%20networking%20environment%20with%20digital%20elements%2C%20contemporary%20office%20space%20with%20people%20working%20on%20laptops%20and%20startup%20projects%2C%20clean%20minimalist%20design%20with%20technology%20integration&width=600&height=400&seq=startex-project&orientation=landscape',
    link: 'https://www.startexhub.com/',
    category: 'Platform Development',
    year: '2024'
  },
  {
    title: 'SmartShield Real Estate',
    description: 'AI-powered real estate platform with intelligent property matching, market analysis, and investment recommendations.',
    tech: 'HTML, CSS, JavaScript, Python Django',
    image: 'https://readdy.ai/api/search-image?query=Luxury%20real%20estate%20platform%20interface%20showing%20modern%20properties%20and%20smart%20analytics%2C%20professional%20property%20management%20dashboard%20with%20AI%20insights%2C%20contemporary%20real%20estate%20technology%20with%20data%20visualization%20and%20market%20analysis%20tools%2C%20premium%20property%20showcase%20design&width=600&height=400&seq=smartshield-project&orientation=landscape',
    link: 'https://www.smartshieldrealestate.com/',
    category: 'Real Estate Tech',
    year: '2024'
  },
  {
    title: 'Curry Mango CT',
    description: 'Premium restaurant website featuring authentic Caribbean and South Asian cuisine with online ordering and AI-driven menu recommendations.',
    tech: 'Python, HTML, CSS, JavaScript',
    image: 'https://readdy.ai/api/search-image?query=Premium%20restaurant%20website%20interface%20showcasing%20authentic%20Caribbean%20and%20South%20Asian%20cuisine%2C%20elegant%20food%20presentation%20with%20colorful%20curry%20dishes%20and%20tropical%20elements%2C%20modern%20restaurant%20branding%20with%20warm%20lighting%20and%20professional%20food%20photography%2C%20sophisticated%20dining%20experience%20design&width=600&height=400&seq=currymango-project&orientation=landscape',
    link: 'https://currymangoct.com/',
    category: 'Restaurant & Hospitality',
    year: '2024'
  },
  {
    title: 'FinTech Analytics Dashboard',
    description: 'Advanced financial analytics platform with AI-powered market predictions, risk assessment, and portfolio optimization for institutional investors.',
    tech: 'React, D3.js, Python, TensorFlow',
    image: 'https://readdy.ai/api/search-image?query=Professional%20financial%20analytics%20dashboard%20with%20charts%20and%20graphs%2C%20modern%20fintech%20interface%20showing%20market%20data%20and%20AI%20predictions%2C%20clean%20corporate%20design%20with%20data%20visualization%20and%20trading%20analytics%2C%20sophisticated%20business%20intelligence%20platform%20with%20dark%20theme%20and%20blue%20accents&width=600&height=400&seq=fintech-dashboard&orientation=landscape',
    link: '#',
    category: 'FinTech',
    year: '2024'
  },
  {
    title: 'MediCare AI Assistant',
    description: 'Intelligent healthcare platform with AI-powered symptom analysis, appointment scheduling, and personalized treatment recommendations.',
    tech: 'Vue.js, Node.js, Medical AI APIs',
    image: 'https://readdy.ai/api/search-image?query=Modern%20healthcare%20platform%20interface%20with%20medical%20professionals%20and%20patients%2C%20clean%20clinical%20design%20with%20AI-powered%20health%20analytics%2C%20professional%20medical%20technology%20dashboard%20with%20patient%20care%20elements%2C%20contemporary%20healthcare%20digital%20solution%20with%20blue%20and%20white%20color%20scheme&width=600&height=400&seq=medicare-ai&orientation=landscape',
    link: '#',
    category: 'Healthcare Tech',
    year: '2023'
  },
  {
    title: 'EduSmart Learning Platform',
    description: 'Revolutionary e-learning platform with AI-powered personalized learning paths, adaptive content delivery, and intelligent progress tracking.',
    tech: 'Angular, MongoDB, AI Learning Algorithms',
    image: 'https://readdy.ai/api/search-image?query=Modern%20e-learning%20platform%20interface%20with%20students%20and%20educational%20content%2C%20contemporary%20online%20education%20dashboard%20with%20AI-powered%20learning%20analytics%2C%20clean%20educational%20technology%20design%20with%20interactive%20elements%2C%20professional%20academic%20platform%20with%20engaging%20visual%20elements&width=600&height=400&seq=edusmart-platform&orientation=landscape',
    link: '#',
    category: 'EdTech',
    year: '2023'
  },
  {
    title: 'RetailMax Inventory System',
    description: 'Smart inventory management system with AI-driven demand forecasting, automated reordering, and real-time analytics for retail businesses.',
    tech: 'React Native, Firebase, Machine Learning',
    image: 'https://readdy.ai/api/search-image?query=Modern%20retail%20inventory%20management%20system%20interface%20showing%20warehouse%20operations%20and%20analytics%2C%20professional%20business%20dashboard%20with%20inventory%20tracking%20and%20AI%20insights%2C%20clean%20corporate%20design%20with%20logistics%20and%20supply%20chain%20elements%2C%20contemporary%20retail%20technology%20platform&width=600&height=400&seq=retailmax-inventory&orientation=landscape',
    link: '#',
    category: 'Retail Technology',
    year: '2023'
  },
  {
    title: 'GreenEnergy Monitoring',
    description: 'Comprehensive renewable energy monitoring platform with AI-powered efficiency optimization and predictive maintenance capabilities.',
    tech: 'Next.js, IoT Integration, Predictive AI',
    image: 'https://readdy.ai/api/search-image?query=Modern%20renewable%20energy%20monitoring%20platform%20interface%20with%20solar%20panels%20and%20wind%20turbines%2C%20clean%20green%20technology%20dashboard%20with%20environmental%20analytics%20and%20AI%20insights%2C%20professional%20sustainability%20platform%20with%20eco-friendly%20design%20elements%2C%20contemporary%20energy%20management%20system&width=600&height=400&seq=greenenergy-monitor&orientation=landscape',
    link: '#',
    category: 'Clean Energy',
    year: '2023'
  },
  {
    title: 'TravelGenius Booking System',
    description: 'AI-powered travel booking platform with intelligent destination recommendations, dynamic pricing, and personalized itinerary planning.',
    tech: 'Flutter, GraphQL, Travel APIs',
    image: 'https://readdy.ai/api/search-image?query=Modern%20travel%20booking%20platform%20interface%20with%20beautiful%20destinations%20and%20vacation%20planning%2C%20contemporary%20travel%20technology%20dashboard%20with%20AI-powered%20recommendations%2C%20clean%20tourism%20platform%20design%20with%20stunning%20travel%20photography%2C%20professional%20hospitality%20booking%20system&width=600&height=400&seq=travelgenius-booking&orientation=landscape',
    link: '#',
    category: 'Travel Technology',
    year: '2022'
  }
];

const categories = ['All', 'Platform Development', 'Real Estate Tech', 'Restaurant & Hospitality', 'FinTech', 'Healthcare Tech', 'EdTech', 'Retail Technology', 'Clean Energy', 'Travel Technology'];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-24 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <Link href="/" className="inline-block mb-8">
              <div className="flex items-center justify-center space-x-2 text-black hover:text-gray-700 transition-colors cursor-pointer">
                <i className="ri-arrow-left-line text-xl"></i>
                <span className="text-lg font-medium">Back to Home</span>
              </div>
            </Link>
            
            <h1 className="text-6xl font-bold text-black mb-6">
              <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent font-light">
                AI
              </span>
              <span className="font-bold text-black">VEO</span>
              {` `}Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive portfolio of AI-powered solutions that have transformed businesses 
              across industries, delivering exceptional results through innovative technology and premium quality.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black text-white px-3 py-1 text-xs font-medium rounded-full">
                      {project.year}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {project.category}
                    </span>
                    {project.link !== '#' && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-black transition-colors cursor-pointer"
                      >
                        <i className="ri-external-link-line"></i>
                      </a>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-800 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(', ').map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Let's create something exceptional together. Our AI-powered solutions deliver premium quality 
            and drive unprecedented business growth.
          </p>
          <Link href="/#contact">
            <button className="bg-white text-black hover:bg-gray-100 px-12 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap">
              Get Started Today
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

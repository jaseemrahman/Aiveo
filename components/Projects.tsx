
'use client';

import Link from 'next/link';

const projects = [
  {
    title: 'StartEx Hub',
    description: 'A comprehensive startup ecosystem platform connecting entrepreneurs, investors, and mentors with AI-powered matching algorithms.',
    tech: 'Next.js, React, TypeScript',
    image: 'https://readdy.ai/api/search-image?query=Modern%20startup%20ecosystem%20platform%20interface%20with%20entrepreneurs%20collaborating%2C%20professional%20business%20networking%20environment%20with%20digital%20elements%2C%20contemporary%20office%20space%20with%20people%20working%20on%20laptops%20and%20startup%20projects%2C%20clean%20minimalist%20design%20with%20technology%20integration&width=600&height=400&seq=startex-project&orientation=landscape',
    link: 'https://www.startexhub.com/'
  },
  {
    title: 'SmartShield Real Estate',
    description: 'AI-powered real estate platform with intelligent property matching, market analysis, and investment recommendations.',
    tech: 'HTML, CSS, JavaScript, Python Django',
    image: 'https://readdy.ai/api/search-image?query=Luxury%20real%20estate%20platform%20interface%20showing%20modern%20properties%20and%20smart%20analytics%2C%20professional%20property%20management%20dashboard%20with%20AI%20insights%2C%20contemporary%20real%20estate%20technology%20with%20data%20visualization%20and%20market%20analysis%20tools%2C%20premium%20property%20showcase%20design&width=600&height=400&seq=smartshield-project&orientation=landscape',
    link: 'https://www.smartshieldrealestate.com/'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our portfolio of AI-driven solutions that have transformed businesses across industries, 
            delivering exceptional results through innovative technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-black group-hover:text-gray-800 transition-colors">
                    {project.title}
                  </h3>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-black transition-colors cursor-pointer"
                  >
                    <i className="ri-external-link-line"></i>
                  </a>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.split(', ').map((tech, techIndex) => (
                    <span key={techIndex} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link href="/projects">
            <button className="bg-black hover:bg-gray-800 text-white px-10 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap">
              View All Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

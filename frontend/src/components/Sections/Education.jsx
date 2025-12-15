// src/components/Sections/Education.jsx
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "PLP Africa Academy",
      degree: "Software Engineering (MERN Stack)",
      period: "July 2025 - December 2025",
      icon: <BookOpen className="w-5 h-5" />,
      highlights: [
        "Full Stack Web Development Specialization",
        "Modern JavaScript Frameworks",
        "Database Design & Management",
        "Agile Development Practices"
      ]
    },
    {
      institution: "Egerton University",
      degree: "Bachelor of Science in Integrated Forest Resources Management",
      period: "January 2012 - September 2015",
      icon: <GraduationCap className="w-5 h-5" />,
      highlights: [
        "Environmental Resource Management",
        "Forestry Conservation Techniques",
        "Sustainable Development Practices",
        "Ecosystem Management"
      ]
    },
   
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light mb-4">Education & Training</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Combining formal education in environmental sciences with cutting-edge 
            software engineering training for a unique interdisciplinary approach.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            
            {educationData.map((edu, index) => (
              <div 
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:pl-0 md:text-right' : 'md:pl-1/2 md:pr-0'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-black rounded-full z-10"></div>
                
                <div className={`ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className={`bg-gray-50 rounded-xl p-6 border ${
                    index === 0 ? 'border-black' : ''
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center mb-2">
                          {edu.icon}
                          <h3 className="text-xl font-medium ml-3">{edu.institution}</h3>
                        </div>
                        <p className="text-gray-600">{edu.degree}</p>
                      </div>
                      <span className="text-sm text-gray-500 whitespace-nowrap">{edu.period}</span>
                    </div>
                    
                    <ul className="space-y-2 mt-4">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-black mr-2 mt-1">•</span>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Current course badge */}
                    {index === 0 && (
                      <div className="mt-4 inline-block px-3 py-1 bg-black text-white text-xs rounded-full">
                        Currently Enrolled
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Philosophy */}
          <div className="mt-20 bg-black text-white rounded-xl p-8">
            <h3 className="text-xl font-light mb-6">Continuous Learning Philosophy</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium mb-2">Formal Education</h4>
                <p className="text-sm text-gray-300">
                  Building strong foundations in both environmental sciences and technology
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Professional Training</h4>
                <p className="text-sm text-gray-300">
                  Specialized courses in modern web development and environmental management
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Practical Experience</h4>
                <p className="text-sm text-gray-300">
                  Applying knowledge in real-world government and community projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

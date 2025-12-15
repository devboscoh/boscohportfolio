// src/components/Sections/Experience.jsx
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Ward Environment Officer",
      company: "Nairobi City County",
      period: "September 2023 - Present",
      responsibilities: [
        "Manage the day-to-day environmental activities of the ward",
        "Oversee waste collection, management, and disposal within the ward",
        "Conduct environmental monitoring, compliance, and enforcement",
        "Organize cleanups and sensitize the community on waste management",
        "Assist in environmental policy formulation and implementation at the ward level"
      ]
    },
    // Add other experiences
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center mb-12">
          <Briefcase className="mr-4" size={32} />
          <h2 className="text-3xl font-light">Work Experience</h2>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm border"
            >
              <div className="mb-4">
                <h3 className="text-xl font-medium">{exp.title}</h3>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-gray-500 text-sm mt-1">{exp.period}</p>
              </div>
              
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span className="text-gray-700">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

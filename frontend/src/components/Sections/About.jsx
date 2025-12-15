// src/components/Sections/About.jsx
import SectionTitle from '../UI/SectionTitle';
import Card from '../UI/Card';
import { Target, User, Briefcase } from 'lucide-react';

const About = () => {
  const attributes = [
    { title: "Adaptable", description: "Thrives in dynamic environments" },
    { title: "Organized", description: "Systematic project management" },
    { title: "Technical", description: "Full-stack development expertise" },
    { title: "Leader", description: "Team & community management" },
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="About Me"
          subtitle="Bridging technology and environmental stewardship with a unique interdisciplinary approach"
          align="center"
          icon={<User size={24} />}
          className="mb-16"
        />
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Career Objective */}
          <Card className="lg:col-span-2">
            <div className="flex items-start mb-6">
              <Target className="mt-1 mr-4 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-medium mb-3">Career Objective</h3>
                <p className="text-gray-700 leading-relaxed">
                  An organized, motivated, and adaptable individual seeking to enhance my environment 
                  while growing alongside all stakeholders. Looking for a dynamic setting that offers 
                  opportunities for real change and professional advancement.
                </p>
              </div>
            </div>
          </Card>

          {/* Key Attributes */}
          <Card variant="filled">
            <h3 className="text-xl font-medium mb-6">Key Attributes</h3>
            <div className="space-y-4">
              {attributes.map((attr, index) => (
                <div key={index} className="pb-4 border-b border-gray-100 last:border-0">
                  <h4 className="font-medium mb-1">{attr.title}</h4>
                  <p className="text-sm text-gray-600">{attr.description}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Current Focus */}
          <Card className="lg:col-span-3 bg-black text-white">
            <div className="flex items-start">
              <Briefcase className="mt-1 mr-4 flex-shrink-0" size={24} />
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-4">Current Focus</h3>
                <p className="text-gray-300 mb-6">
                  Pursued MERN stack development to complement my environmental expertise.
                </p>
                <div className="flex items-center">
                  <div className="flex-1 bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-white h-2 rounded-full transition-all duration-1000" 
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                  <span className="ml-4 text-sm">75% Complete</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

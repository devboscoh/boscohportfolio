// src/components/Sections/About.jsx
import SectionTitle from '../UI/SectionTitle';
import Card from '../UI/Card';
import { Target, User, Briefcase, Sparkles } from 'lucide-react';

const About = () => {
  const attributes = [
    { title: "Adaptable", description: "Thrives in dynamic environments" },
    { title: "Organized", description: "Systematic project management" },
    { title: "Technical", description: "Full-stack development expertise" },
    { title: "Leader", description: "Team & community management" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-brand-500/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Me"
          subtitle="Bridging technology and environmental stewardship with a unique interdisciplinary approach"
          align="center"
          icon={<User className="text-brand-500" size={24} />}
          className="mb-16"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 p-8 border-slate-100 bg-slate-50/30">
            <div className="flex items-start gap-6">
              <div className="p-3 bg-white rounded-xl text-brand-600 shadow-sm">
                <Target size={24} />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">Professional Objective</h3>
                <p className="text-slate-600 leading-relaxed">
                  Technologically advanced professional passionate about applying <span className="text-brand-600 font-medium">cutting-edge solutions</span> to environmental challenges. Seeking to leverage expertise in <span className="text-brand-600 font-medium">MERN stack development</span> and GIS to build sustainable, data-driven tools for the future.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            {attributes.map((attr, i) => (
              <div key={i} className="p-5 rounded-2xl border border-slate-100 bg-white hover:border-brand-200 transition-colors">
                <h4 className="font-bold text-slate-900 text-sm mb-1">{attr.title}</h4>
                <p className="text-slate-500 text-xs leading-tight">{attr.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

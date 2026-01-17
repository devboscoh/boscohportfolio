// src/components/Sections/Skills.jsx
import { Code, Map, Globe, BarChart } from 'lucide-react';

const Skills = () => {
  const categories = [
    { title: "Full Stack", icon: <Code size={20}/>, stack: ["React", "Node.js", "MongoDB", "Express", "TypeScript"] },
    { title: "GIS", icon: <Map size={20}/>, stack: ["QGIS", "ArcGIS Pro", "PostGIS", "Leaflet", "Python"] },
    { title: "Environment", icon: <Globe size={20}/>, stack: ["Compliance", "EIA", "Waste Systems", "Forestry"] },
    { title: "Data", icon: <BarChart size={20}/>, stack: ["SQL", "Tableau", "Power BI", "Excel VBA"] }
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">Technical <span className="text-brand-500">Expertise</span></h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="p-8 rounded-[2rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-brand/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-600 mb-6">
                {cat.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.stack.map((skill, j) => (
                  <span key={j} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white border border-slate-100 text-slate-500 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
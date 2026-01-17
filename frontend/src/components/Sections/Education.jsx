// src/components/Sections/Education.jsx
import { GraduationCap, BookOpen, CheckCircle2 } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "PLP Africa Academy",
      degree: "Software Engineering (MERN Stack)",
      period: "2025",
      status: "Currently Enrolled",
      icon: <BookOpen size={20} />,
      highlights: ["Full Stack Web Development", "Modern JS Frameworks (React/Node.js)"]
    },
    {
      institution: "Egerton University",
      degree: "B.Sc. Integrated Forest Resources Management",
      period: "2012 - 2015",
      status: "Completed",
      icon: <GraduationCap size={20} />,
      highlights: ["Environmental Resource Management", "Sustainable Development Practices"]
    }
  ];

  return (
    <section id="education" className="py-24 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">Academic <span className="text-brand-500">Foundation</span></h2>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
          {educationData.map((edu, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 text-brand-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                {edu.icon}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-100 bg-white shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-brand-500 uppercase tracking-wider">{edu.period}</span>
                  {edu.status === "Currently Enrolled" && <span className="flex items-center gap-1 text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter">Live</span>}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{edu.degree}</h3>
                <p className="text-slate-500 text-sm mb-4">{edu.institution}</p>
                <ul className="space-y-2">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 size={14} className="text-brand-400 mt-0.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
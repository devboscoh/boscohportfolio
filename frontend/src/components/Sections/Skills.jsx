// src/components/Sections/Skills.jsx
import { Code, Globe, Users, BarChart, Map, Layers, Database, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Full Stack Development",
      icon: <Code className="w-6 h-6" />,
      skills: [
        "MERN Stack (MongoDB, Express, React, Node.js)",
        "JavaScript/TypeScript",
        "TailwindCSS & Vite",
        "REST APIs & GraphQL",
        "Git & Version Control"
      ],
      techStack: ["MongoDB", "Express", "React", "Node.js", "JavaScript", "TypeScript"]
    },
    {
      title: "GIS & Geospatial Technology",
      icon: <Map className="w-6 h-6" />,
      skills: [
        "QGIS & ArcGIS Pro",
        "Geospatial Data Analysis",
        "Spatial Database Management",
        "Remote Sensing",
        "Cartography & Map Design",
        "Environmental GIS Applications"
      ],
      techStack: ["QGIS", "ArcGIS", "PostGIS", "GDAL", "Leaflet", "Mapbox"]
    },
    {
      title: "Environmental Management",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        "Environmental Monitoring & Compliance",
        "Waste Management Systems",
        "Environmental Impact Assessments",
        "Forestry & Resource Management",
        "Climate Change Adaptation"
      ],
      techStack: ["Environmental Modeling", "Remote Sensing", "Data Analysis", "Reporting"]
    },
    {
      title: "Data Analysis & Tools",
      icon: <BarChart className="w-6 h-6" />,
      skills: [
        "MS Excel (Advanced)",
        "Data Visualization",
        "Statistical Analysis",
        "Database Management",
        "Report Generation"
      ],
      techStack: ["Excel", "Python", "R", "Tableau", "Power BI", "SQL"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-4">Technical Expertise</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Bridging geospatial technology, environmental science, and full-stack development 
            to create innovative solutions for sustainable development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group border border-gray-200 rounded-2xl p-8 hover:border-black transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="ml-4 text-2xl font-light">{category.title}</h3>
              </div>
              
              <ul className="space-y-3 mb-6">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex} 
                    className="flex items-start text-gray-700"
                  >
                    <span className="text-black mr-2 mt-1">•</span>
                    <span className="text-base">{skill}</span>
                  </li>
                ))}
              </ul>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2">
                {category.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GIS Specialization Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <Map className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="ml-4 text-2xl font-light">GIS Specialization</h3>
              </div>
              
              <p className="text-gray-700 mb-6 text-lg">
                Combining QGIS expertise with environmental management to provide 
                spatial solutions for sustainable development and resource management.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl">
                  <div className="text-blue-600 font-bold text-xl mb-1">QGIS</div>
                  <div className="text-sm text-gray-600">Advanced User</div>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <div className="text-green-600 font-bold text-xl mb-1">ArcGIS</div>
                  <div className="text-sm text-gray-600">Proficient</div>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <div className="text-purple-600 font-bold text-xl mb-1">Remote Sensing</div>
                  <div className="text-sm text-gray-600">Image Analysis</div>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <div className="text-orange-600 font-bold text-xl mb-1">Spatial DB</div>
                  <div className="text-sm text-gray-600">PostGIS/SQL</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold mb-4">GIS Applications</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Environmental Impact Assessment Mapping</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Forest Resource Inventory & Management</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span>Waste Management Zone Planning</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span>Land Use & Land Cover Analysis</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  <span>Community Resource Mapping</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technology Stack Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light mb-4">Technology Stack</h3>
            <p className="text-gray-600">Tools and technologies I work with</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "QGIS", category: "GIS", color: "bg-green-100 text-green-800" },
              { name: "ArcGIS", category: "GIS", color: "bg-blue-100 text-blue-800" },
              { name: "PostGIS", category: "GIS", color: "bg-purple-100 text-purple-800" },
              { name: "React", category: "Frontend", color: "bg-cyan-100 text-cyan-800" },
              { name: "Node.js", category: "Backend", color: "bg-green-100 text-green-800" },
              { name: "MongoDB", category: "Database", color: "bg-emerald-100 text-emerald-800" },
              { name: "Express", category: "Backend", color: "bg-gray-100 text-gray-800" },
              { name: "Tailwind", category: "Frontend", color: "bg-sky-100 text-sky-800" },
              { name: "Python", category: "Data", color: "bg-yellow-100 text-yellow-800" },
              { name: "JavaScript", category: "Frontend", color: "bg-yellow-100 text-yellow-800" },
              { name: "PostgreSQL", category: "Database", color: "bg-blue-100 text-blue-800" },
              { name: "Docker", category: "DevOps", color: "bg-blue-100 text-blue-800" },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl p-6 text-center group hover:border-black transition-all duration-300 hover:shadow-lg"
              >
                <div className={`text-sm px-3 py-1 rounded-full inline-block mb-3 ${tech.color}`}>
                  {tech.category}
                </div>
                <div className="text-xl font-medium">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Unique Value Proposition */}
        <div className="mt-20 bg-black text-white rounded-2xl p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-light mb-6">Integrated Solutions Approach</h3>
            <p className="text-gray-300 text-lg mb-8">
              Uniquely positioned to integrate geospatial analysis with web technologies, 
              creating interactive platforms for environmental monitoring, resource management, 
              and sustainable development planning.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Layers className="w-12 h-12 mx-auto mb-4" />
                <h4 className="text-xl font-medium mb-3">Geospatial Analysis</h4>
                <p className="text-gray-300">
                  Advanced QGIS skills for environmental mapping and spatial decision-making
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Code className="w-12 h-12 mx-auto mb-4" />
                <h4 className="text-xl font-medium mb-3">Web Development</h4>
                <p className="text-gray-300">
                  Building interactive GIS web applications using modern MERN stack
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Globe className="w-12 h-12 mx-auto mb-4" />
                <h4 className="text-xl font-medium mb-3">Environmental Expertise</h4>
                <p className="text-gray-300">
                  Practical field experience in environmental management and conservation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
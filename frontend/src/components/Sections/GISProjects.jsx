// src/components/Sections/GISProjects.jsx
import { useState } from 'react';
import { Map, Layers, Database, Globe, Download, ExternalLink, Eye } from 'lucide-react';

const GISProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const gisProjects = [
    {
      id: 1,
      title: "Community Forest Resource Mapping",
      description: "QGIS-based mapping of community forest resources with detailed species inventory and boundary demarcation",
      tools: ["QGIS", "PostGIS", "Field Survey", "GPS"],
      category: "Environmental",
      year: "2023",
      images: [
        "/images/gis/forest-map.jpg",
        "/images/gis/forest-analysis.jpg"
      ],
      deliverables: [
        "Interactive web map",
        "GIS database",
        "Resource inventory report",
        "Boundary shapefiles"
      ]
    },
    {
      id: 2,
      title: "Waste Management Zone Planning",
      description: "Spatial analysis for optimal waste collection routes and disposal site planning in urban areas",
      tools: ["QGIS", "Network Analysis", "Python", "OpenStreetMap"],
      category: "Urban Planning",
      year: "2023",
      images: [
        "/images/gis/waste-zones.jpg",
        "/images/gis/routes.jpg"
      ],
      deliverables: [
        "Route optimization maps",
        "Zone planning shapefiles",
        "Collection schedule",
        "Capacity analysis"
      ]
    },
    {
      id: 3,
      title: "Environmental Impact Assessment - Kosiga Dam",
      description: "Comprehensive GIS analysis for dam construction impact assessment and mitigation planning",
      tools: ["QGIS", "Remote Sensing", "Hydrological Modeling", "R"],
      category: "Environmental",
      year: "2020",
      images: [
        "/images/gis/dam-analysis.jpg",
        "/images/gis/impact-zones.jpg"
      ],
      deliverables: [
        "Impact zone maps",
        "Risk assessment layers",
        "Mitigation plan maps",
        "Monitoring framework"
      ]
    },
    {
      id: 4,
      title: "Land Use/Land Cover Change Analysis",
      description: "Multi-temporal analysis of land use changes using satellite imagery and remote sensing",
      tools: ["QGIS", "Landsat", "Sentinel-2", "Change Detection"],
      category: "Research",
      year: "2022",
      images: [
        "/images/gis/lulc-change.jpg",
        "/images/gis/temporal-analysis.jpg"
      ],
      deliverables: [
        "Change detection maps",
        "Transition matrices",
        "Trend analysis report",
        "Future projections"
      ]
    },
    {
      id: 5,
      title: "Web GIS Application for Resource Management",
      description: "Interactive web application integrating QGIS data with React/Leaflet for real-time resource monitoring",
      tools: ["QGIS Server", "React", "Leaflet", "PostGIS", "Node.js"],
      category: "Web Development",
      year: "2024",
      images: [
        "/images/gis/web-gis.jpg",
        "/images/gis/dashboard.jpg"
      ],
      deliverables: [
        "Live web application",
        "Interactive maps",
        "Real-time data dashboard",
        "API endpoints"
      ]
    },
    {
      id: 6,
      title: "Community Resource Atlas",
      description: "Comprehensive digital atlas of community resources including water points, schools, and health facilities",
      tools: ["QGIS", "Field Maps", "Community Survey", "Data Collection"],
      category: "Community",
      year: "2021",
      images: [
        "/images/gis/community-atlas.jpg",
        "/images/gis/resource-map.jpg"
      ],
      deliverables: [
        "Digital atlas PDF",
        "Interactive map",
        "Resource database",
        "Community report"
      ]
    }
  ];

  return (
    <section id="gis-projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Map className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl font-light mb-4">GIS Projects & Analysis</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Showcasing practical applications of QGIS and geospatial technologies 
            in environmental management, urban planning, and community development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gisProjects.map((project) => (
            <div
              key={project.id}
              className="group border border-gray-200 rounded-2xl overflow-hidden hover:border-black transition-all duration-300 hover:shadow-xl"
            >
              {/* Project Header */}
              <div className="p-6 border-b">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-50 rounded-lg mr-3">
                      <Layers className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">{project.category}</span>
                      <h3 className="text-xl font-medium">{project.title}</h3>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    {project.year}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
              </div>

              {/* Tools Used */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Deliverables */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">DELIVERABLES</h4>
                  <ul className="space-y-1">
                    {project.deliverables.map((item, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <Eye size={16} />
                    View Details
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Download size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GIS Tools Showcase */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light mb-4">GIS Tools & Technologies</h3>
            <p className="text-gray-600">Advanced proficiency in these geospatial tools</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "QGIS", icon: "🗺️", level: "Advanced", color: "bg-green-100 text-green-800" },
              { name: "ArcGIS", icon: "📍", level: "Proficient", color: "bg-blue-100 text-blue-800" },
              { name: "PostGIS", icon: "🗄️", level: "Intermediate", color: "bg-purple-100 text-purple-800" },
              { name: "GDAL", icon: "🔧", level: "Intermediate", color: "bg-orange-100 text-orange-800" },
              { name: "Leaflet", icon: "🌍", level: "Advanced", color: "bg-green-100 text-green-800" },
              { name: "Mapbox", icon: "🗺️", level: "Intermediate", color: "bg-pink-100 text-pink-800" },
              { name: "Python", icon: "🐍", level: "Intermediate", color: "bg-yellow-100 text-yellow-800" },
              { name: "Remote Sensing", icon: "🛰️", level: "Intermediate", color: "bg-indigo-100 text-indigo-800" },
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-3xl mb-4">{tool.icon}</div>
                <div className="font-medium text-lg mb-2">{tool.name}</div>
                <div className={`px-3 py-1 rounded-full text-sm ${tool.color}`}>
                  {tool.level}
                </div>
                <div className="mt-4">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${
                        tool.level === 'Advanced' ? 'w-full bg-green-500' :
                        tool.level === 'Proficient' ? 'w-3/4 bg-blue-500' :
                        'w-2/3 bg-purple-500'
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-light mb-2">{selectedProject.title}</h3>
                  <div className="flex items-center gap-4">
                    <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full">
                      {selectedProject.category}
                    </span>
                    <span className="text-gray-600">{selectedProject.year}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  ✕
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-medium mb-4">Project Description</h4>
                  <p className="text-gray-700">{selectedProject.description}</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-4">Tools & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4">Deliverables</h4>
                <ul className="grid grid-cols-2 gap-3">
                  {selectedProject.deliverables.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2">
                  <Download size={20} />
                  Download Case Study
                </button>
                <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                  <ExternalLink size={20} />
                  View Live Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GISProjects;

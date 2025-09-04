import React from 'react';
import { Microscope, Leaf, Calendar, ExternalLink, Beaker, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Biodegradation of Plastic using Genetically Modified Pseudomonas Aeruginosa",
      period: "07/07/2024 – 01/06/2025",
      status: "Research Phase",
      description: "Creation of a genetically modified pseudomonas aeruginosa to extract higher amount of lipase and serine hydrolase enzyme which has the ability to degrade LDPE",
      icon: <Microscope className="w-8 h-8" />,
      color: "green",
      details: [
        "Genetic modification of Pseudomonas aeruginosa bacteria",
        "Enhanced production of lipase and serine hydrolase enzymes",
        "Target: Low-density polyethylene (LDPE) degradation",
        "Potential application in plastic waste management",
        "Research presented at multiple conferences"
      ],
      technologies: ["Genetic Engineering", "Enzyme Technology", "Microbiology", "Environmental Biotechnology"],
      impact: "Could revolutionize plastic waste management by providing a biological solution to plastic pollution"
    },
    {
      title: "Bio Carbon Capturing",
      period: "01/05/2024 – Current",
      status: "Active Startup",
      description: "Creation of startup which works on creating a genetically modified Synecococus which captures carbon dioxide and converts them into biofuels which can be monitized as an alternative for diesel",
      icon: <Leaf className="w-8 h-8" />,
      color: "blue",
      details: [
        "Genetic modification of Synechococcus cyanobacteria",
        "Enhanced CO2 capture and conversion capabilities",
        "Production of biofuels as diesel alternatives",
        "Commercial viability and scalability focus",
        "Startup development and business model creation"
      ],
      technologies: ["Synthetic Biology", "Carbon Capture", "Biofuel Production", "Entrepreneurship"],
      impact: "Addresses climate change by capturing CO2 while producing sustainable fuel alternatives"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return {
          bg: 'from-green-50 to-green-100',
          border: 'border-green-200',
          icon: 'bg-green-600',
          badge: 'bg-green-100 text-green-800',
          button: 'text-green-600 hover:text-green-700'
        };
      case 'blue':
        return {
          bg: 'from-blue-50 to-blue-100',
          border: 'border-blue-200',
          icon: 'bg-blue-600',
          badge: 'bg-blue-100 text-blue-800',
          button: 'text-blue-600 hover:text-blue-700'
        };
      default:
        return {
          bg: 'from-gray-50 to-gray-100',
          border: 'border-gray-200',
          icon: 'bg-gray-600',
          badge: 'bg-gray-100 text-gray-800',
          button: 'text-gray-600 hover:text-gray-700'
        };
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Research Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative biotechnology research focused on environmental sustainability and genetic engineering solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            
            return (
              <div key={index} className={`bg-gradient-to-br ${colors.bg} p-8 rounded-2xl ${colors.border} border hover:shadow-xl transition-all duration-300`}>
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Project Header */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-3 ${colors.icon} rounded-xl text-white flex-shrink-0`}>
                        {project.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className={`inline-block px-3 py-1 ${colors.badge} text-sm font-medium rounded-full`}>
                            {project.status}
                          </span>
                          <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{project.period}</span>
                          </div>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h2>
                        <p className="text-gray-600 leading-relaxed">{project.description}</p>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Beaker className="w-5 h-5" />
                        Key Research Areas
                      </h3>
                      <ul className="space-y-2">
                        {project.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Zap className="w-5 h-5" />
                        Technologies & Methods
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Impact */}
                  <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 h-full">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <ExternalLink className="w-5 h-5" />
                        Potential Impact
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {project.impact}
                      </p>
                      
                      {/* Project Stats */}
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500 text-sm">Duration</span>
                          <span className="font-medium text-gray-800">
                            {project.period.includes('Current') ? '8+ months' : '11 months'}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500 text-sm">Status</span>
                          <span className="font-medium text-gray-800">{project.status}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500 text-sm">Field</span>
                          <span className="font-medium text-gray-800">Biotechnology</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Future Projects Section */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Future Research Directions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Microscope className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Advanced Genetic Circuits</h3>
              <p className="text-gray-600 text-sm">
                Developing more sophisticated genetic control systems for enhanced efficiency
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Scalable Solutions</h3>
              <p className="text-gray-600 text-sm">
                Focusing on industrial-scale implementation of biotechnology solutions
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl border border-teal-200">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Multi-target Approaches</h3>
              <p className="text-gray-600 text-sm">
                Combining multiple environmental challenges into integrated solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
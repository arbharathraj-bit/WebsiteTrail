import React from 'react';
import { Microscope, Users, Camera, Award, Zap, Edit3, TrendingUp, Share2, Phone, MessageCircle } from 'lucide-react';

const Skills = () => {
  const skills = {
    technical: [
      { name: "Genetic Engineering", level: 90, description: "Advanced genetic modification techniques and synthetic biology" },
      { name: "Biotechnology Research", level: 95, description: "Comprehensive research methodology and experimental design" },
      { name: "Microbiology", level: 85, description: "Bacterial culture, modification, and analysis" },
      { name: "Environmental Science", level: 80, description: "Environmental impact assessment and sustainability" },
      { name: "MATLAB", level: 75, description: "Bioengineering applications and data analysis" }
    ],
    interpersonal: [
      { name: "Scientific Presentation", level: 90, description: "Conference presentations and academic communication" },
      { name: "Research Leadership", level: 85, description: "Leading research projects and team coordination" },
      { name: "Team Collaboration", level: 90, description: "Effective teamwork in research environments" },
      { name: "Project Management", level: 80, description: "Managing complex research timelines and deliverables" }
    ],
    creative: [
      { name: "Photography", level: 85, description: "Professional photography and visual documentation" },
      { name: "Video Editing", level: 80, description: "Content creation and multimedia production" },
      { name: "Digital Marketing", level: 75, description: "Online marketing strategies and brand development" },
      { name: "Social Media Management", level: 80, description: "Social media strategy and content management" }
    ]
  };

  const hobbies = [
    { icon: <Users className="w-6 h-6" />, name: "Semi-Pro Football", category: "Sports", description: "Competitive football player with semi-professional experience" },
    { icon: <Award className="w-6 h-6" />, name: "Cricket", category: "Sports", description: "Active cricket player and sports enthusiast" },
    { icon: <Zap className="w-6 h-6" />, name: "Table Tennis", category: "Sports", description: "Recreational table tennis player" },
    { icon: <Camera className="w-6 h-6" />, name: "Photography", category: "Creative", description: "Passionate about capturing moments and visual storytelling" },
    { icon: <Edit3 className="w-6 h-6" />, name: "Video Editing", category: "Creative", description: "Creating and editing multimedia content" },
    { icon: <TrendingUp className="w-6 h-6" />, name: "Digital Marketing", category: "Creative", description: "Developing digital marketing strategies and campaigns" },
    { icon: <Share2 className="w-6 h-6" />, name: "Social Media", category: "Creative", description: "Managing social media presence and engagement" }
  ];

  const SkillBar = ({ skill }: { skill: any }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold text-gray-800">{skill.name}</h4>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
        <div
          className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600">{skill.description}</p>
    </div>
  );

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical capabilities, interpersonal skills, and creative pursuits that contribute to my research and professional development.
          </p>
        </div>

        {/* Skills Sections */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Technical Skills */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 rounded-xl">
                <Microscope className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Technical Skills</h2>
            </div>
            <div className="space-y-6">
              {skills.technical.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Interpersonal Skills */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Interpersonal Skills</h2>
            </div>
            <div className="space-y-6">
              {skills.interpersonal.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Creative Skills */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Camera className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Creative Skills</h2>
            </div>
            <div className="space-y-6">
              {skills.creative.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Hobbies & Interests */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Hobbies & Interests</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                    {hobby.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{hobby.name}</h3>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">{hobby.category}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-green-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Core Competencies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Microscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Research Excellence</h3>
              <p className="text-gray-600 text-sm">
                Advanced biotechnology research with focus on genetic engineering and environmental applications
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Leadership & Communication</h3>
              <p className="text-gray-600 text-sm">
                Strong presentation skills and ability to lead research teams effectively
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Creative Problem Solving</h3>
              <p className="text-gray-600 text-sm">
                Innovative approach to research challenges with creative and technical skills
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Well-Rounded Individual</h3>
              <p className="text-gray-600 text-sm">
                Balance of academic excellence, sports participation, and creative pursuits
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
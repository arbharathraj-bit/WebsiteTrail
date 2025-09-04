import React, { useState } from 'react';
import { Calendar, MapPin, Users, Award, Briefcase, GraduationCap, X, Trophy, Star } from 'lucide-react';

interface Achievement {
  id: string;
  type: 'conference' | 'internship' | 'workshop' | 'honor' | 'project';
  status: 'completed' | 'upcoming' | 'ongoing';
  title: string;
  organization: string;
  location: string;
  date: string;
  description: string[];
}

const Achievements: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const internships: Achievement[] = [
    {
      id: '1',
      type: 'internship',
      status: 'completed',
      title: 'Rapture Biotechnology',
      organization: 'Biotechnology Company',
      location: 'Chennai, India',
      date: '27/05/2023 – 17/06/2023',
      description: ['Genomic and Recombinant DNA Technology', 'Bioprocess Engineering and Technology', 'Bioinformatics and Computational Biology']
    },
    {
      id: '2',
      type: 'internship',
      status: 'completed',
      title: 'Haritha Institute & Research Foundation',
      organization: 'Research Institute',
      location: 'Chennai, India',
      date: '29/05/2023 – 21/06/2023',
      description: ['Enzyme & Microbial Technology', 'Worked in the field of microbiology and enzyme production']
    },
    {
      id: '3',
      type: 'internship',
      status: 'completed',
      title: 'Bionyme Laboratories',
      organization: 'Laboratory',
      location: 'Chennai, India',
      date: '11/12/2023 – 30/12/2023',
      description: ['Plant Tissue Culture', 'Worked in plant tissue culturing domain']
    },
    {
      id: '4',
      type: 'internship',
      status: 'completed',
      title: 'Geomarine Biotechnologies',
      organization: 'Biotechnology Company',
      location: 'Chennai, India',
      date: '27/01/2023 – 28/04/2023',
      description: ['Completed Skill Development course on "Probiotics Technology"']
    },
    {
      id: '5',
      type: 'internship',
      status: 'completed',
      title: 'Chennai Mettax Lab',
      organization: 'Testing Laboratory',
      location: 'Chennai, India',
      date: '07/12/2022 – 14/12/2022',
      description: ['Proximate Analysis', 'Worked in the field of quantification of food analysis']
    },
    {
      id: '6',
      type: 'internship',
      status: 'completed',
      title: 'Mass Diagnostic Centre',
      organization: 'Diagnostic Center',
      location: 'Chennai, India',
      date: '11/03/2022 – 28/05/2022',
      description: ['Completed Skill development course on "Clinical Pathology"']
    }
  ];

  const conferences: Achievement[] = [
    {
      id: '7',
      type: 'conference',
      status: 'completed',
      title: 'GENESIS 24',
      organization: 'SRM VDP',
      location: 'Chennai, India',
      date: '04/10/2024',
      description: ['Presented paper on "Biodegradation of plastic using genetically modified pseudomonas aeruginosa"', 'Showcased innovative research in environmental biotechnology', 'Networked with academic and industry professionals']
    },
    {
      id: '8',
      type: 'conference',
      status: 'completed',
      title: 'BIOCIENCIA 2024',
      organization: 'SIMATS Engineering',
      location: 'Chennai, India',
      date: '17/10/2024 – 18/10/2024',
      description: ['Presented paper on "Biodegradation of plastic using genetically modified pseudomonas aeruginosa"', 'Participated in international biotechnology conference', 'Engaged with global research community']
    },
    {
      id: '9',
      type: 'conference',
      status: 'completed',
      title: 'Recent Trends in Biotechnology and Its Applications',
      organization: 'Vels Institute of Science Technology and Advanced Studies',
      location: 'Chennai, India',
      date: '20/03/2023 – 21/03/2023',
      description: ['Presented paper on "Salt tolerant genetically modified Oryza sativa"', 'Explored cutting-edge biotechnology applications', 'Connected with academic researchers']
    },
    {
      id: '10',
      type: 'conference',
      status: 'completed',
      title: 'FUTUREPRENEUR 2024',
      organization: 'TN Chamber Madurai',
      location: 'Madurai, India',
      date: '30/11/2024',
      description: ['Presented pitchdeck on "Bio Carbon Capturing"', 'Event conducted by Startup TN', 'Showcased entrepreneurial innovation in biotechnology']
    },
    {
      id: '11',
      type: 'conference',
      status: 'completed',
      title: 'Carbon Zero Challenge 3.0',
      organization: 'Indian Institute of Technology',
      location: 'Madras, India',
      date: '26/07/2023 – 28/07/2023',
      description: ['Presented idea at "Pitch for the Planet"', 'Competed in environmental innovation challenge', 'Developed sustainable technology solutions']
    },
    {
      id: '12',
      type: 'conference',
      status: 'completed',
      title: 'Unleashing the Wings of STEM 2023',
      organization: 'Vels Institute of Science Technology and Advanced Studies',
      location: 'Chennai, India',
      date: '21/07/2023',
      description: ['National level STEM competition', 'Demonstrated scientific innovation and creativity', 'Competed with top STEM talent nationwide']
    }
  ];

  const workshops: Achievement[] = [
    {
      id: '13',
      type: 'workshop',
      status: 'upcoming',
      title: 'MATLAB for Lifescience: Unlocking Bioengineering Potential',
      organization: 'ARK INFOSOLUTIONS PRIVATE LIMITED',
      location: 'Chennai, India',
      date: '30/01/2025 – 31/01/2025',
      description: ['Advanced MATLAB programming for life sciences', 'Bioengineering applications and data analysis', 'Computational tools for biotechnology research']
    },
    {
      id: '14',
      type: 'workshop',
      status: 'completed',
      title: 'Financial Literacy & Empowerment Workshop',
      organization: 'Vels Institute of Science Technology and Advanced Studies',
      location: 'Chennai, India',
      date: '11/03/2023',
      description: ['Personal finance management strategies', 'Investment planning and portfolio development', 'Financial empowerment for professionals']
    },
    {
      id: '15',
      type: 'workshop',
      status: 'completed',
      title: 'Vaccine Technology',
      organization: 'Haritha Institute & Research Foundation',
      location: 'Chennai, India',
      date: '03/06/2023',
      description: ['One day workshop on vaccine technology', 'Modern vaccination development processes', 'Quality control and regulatory aspects']
    }
  ];

  const honors: Achievement[] = [
    {
      id: '16',
      type: 'honor',
      status: 'completed',
      title: 'Second Prize - Pixel Pulse',
      organization: 'Anna University',
      location: 'Chennai, India',
      date: '03/04/2024',
      description: ['Certificate of Achievement at BIOTECHCELLENCE 24', 'Recognized for excellence in biotechnology presentation', 'Competed against top university students']
    },
    {
      id: '17',
      type: 'honor',
      status: 'completed',
      title: 'First Prize - Poster Making',
      organization: 'VISTAS',
      location: 'Chennai, India',
      date: '30/08/2023',
      description: ['Won first prize in poster making competition', 'Event conducted on World Entrepreneurship Day', 'Demonstrated creative and technical communication skills']
    },
    {
      id: '18',
      type: 'honor',
      status: 'completed',
      title: 'Consolation Prize - AD MAD',
      organization: 'Bureau of Indian Standards',
      location: 'Chennai, India',
      date: '06/10/2023',
      description: ['Won consolation prize in AD MAD event', 'Conducted by Bureau of Indian Standards', 'Showcased creative advertising and marketing skills']
    },
    {
      id: '19',
      type: 'honor',
      status: 'completed',
      title: 'Fourth Place - Quiz Competition',
      organization: 'VISTAS',
      location: 'Chennai, India',
      date: '02/08/2024',
      description: ['Certificate of Merit for fourth place', 'Quiz conducted by Bureau of Indian Standards', 'Demonstrated knowledge in biotechnology and standards']
    },
    {
      id: '20',
      type: 'honor',
      status: 'completed',
      title: 'Participation Prize - Essay Competition',
      organization: 'VISTAS',
      location: 'Chennai, India',
      date: '13/09/2023',
      description: ['Participated in Essay Competition for SWACHHATA PAKHWADA-2023', 'Contributed to cleanliness and hygiene awareness', 'Demonstrated writing and communication skills']
    },
    {
      id: '21',
      type: 'honor',
      status: 'completed',
      title: 'Certificate of Participation - Vels Stars 2023',
      organization: 'Vels Institute of Science Technology and Advanced Studies',
      location: 'Chennai, India',
      date: '22/09/2023',
      description: ['Participated in Variety event at Vels Stars 2023', 'Showcased diverse talents and skills', 'Contributed to university cultural activities']
    },
    {
      id: '22',
      type: 'honor',
      status: 'completed',
      title: 'Certificate of Appreciation - Registration Team',
      organization: 'VISTAS',
      location: 'Chennai, India',
      date: '20/03/2024',
      description: ['Certificate of Recognition for being part of Registration team', 'VELS NAKSHATRA 2024 event coordination', 'Demonstrated organizational and teamwork skills']
    }
  ];

  const projects: Achievement[] = [
    {
      id: '23',
      type: 'project',
      status: 'ongoing',
      title: 'Biodegradation of Plastic using Genetically Modified Pseudomonas Aeruginosa',
      organization: 'Independent Research',
      location: 'Chennai, India',
      date: '07/07/2024 – 01/06/2025',
      description: ['Creation of genetically modified Pseudomonas aeruginosa', 'Enhanced production of lipase and serine hydrolase enzymes', 'Target: LDPE (Low-density polyethylene) degradation', 'Environmental application for plastic waste management']
    },
    {
      id: '24',
      type: 'project',
      status: 'ongoing',
      title: 'Bio Carbon Capturing',
      organization: 'Startup Initiative',
      location: 'Chennai, India',
      date: '01/05/2024 – Current',
      description: ['Creation of startup focused on carbon capture technology', 'Genetically modified Synechococcus for CO2 capture', 'Conversion of CO2 into biofuels', 'Alternative diesel production for commercial viability']
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'conference':
        return <Users className="w-6 h-6" />;
      case 'internship':
        return <Briefcase className="w-6 h-6" />;
      case 'workshop':
        return <GraduationCap className="w-6 h-6" />;
      case 'honor':
        return <Trophy className="w-6 h-6" />;
      case 'project':
        return <Star className="w-6 h-6" />;
      default:
        return <Award className="w-6 h-6" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'conference':
        return 'bg-blue-100 text-blue-800';
      case 'internship':
        return 'bg-green-100 text-green-800';
      case 'workshop':
        return 'bg-purple-100 text-purple-800';
      case 'honor':
        return 'bg-yellow-100 text-yellow-800';
      case 'project':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'upcoming':
        return 'bg-yellow-100 text-yellow-800';
      case 'ongoing':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getModalDetails = (achievement: Achievement) => {
    switch (achievement.type) {
      case 'conference':
        return {
          icon: <Users className="w-8 h-8 text-blue-600" />,
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-200',
          impact: 'Contributed to academic discourse and professional networking in the biotechnology field.'
        };
      case 'internship':
        return {
          icon: <Briefcase className="w-8 h-8 text-green-600" />,
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          impact: 'Gained hands-on industry experience and developed practical skills in biotechnology applications.'
        };
      case 'workshop':
        return {
          icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
          bgColor: 'bg-purple-50',
          borderColor: 'border-purple-200',
          impact: 'Enhanced technical skills and knowledge through specialized training and practical application.'
        };
      case 'honor':
        return {
          icon: <Trophy className="w-8 h-8 text-yellow-600" />,
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-200',
          impact: 'Recognition of excellence and outstanding performance in competitive academic and professional environments.'
        };
      case 'project':
        return {
          icon: <Star className="w-8 h-8 text-indigo-600" />,
          bgColor: 'bg-indigo-50',
          borderColor: 'border-indigo-200',
          impact: 'Innovative research contributing to environmental sustainability and biotechnology advancement.'
        };
      default:
        return {
          icon: <Award className="w-8 h-8 text-gray-600" />,
          bgColor: 'bg-gray-50',
          borderColor: 'border-gray-200',
          impact: 'Contributed to professional development and skill enhancement.'
        };
    }
  };

  const renderAchievementCard = (achievement: Achievement) => {
    const modalDetails = getModalDetails(achievement);
    
    return (
      <div
        key={achievement.id}
        onClick={() => setSelectedAchievement(achievement)}
        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 cursor-pointer hover:scale-105 border border-gray-100"
      >
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-lg ${getTypeColor(achievement.type)}`}>
            {getIcon(achievement.type)}
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(achievement.status)}`}>
            {achievement.status}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
        <p className="text-gray-600 font-medium mb-2">{achievement.organization}</p>
        
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="mr-4">{achievement.location}</span>
          <Calendar className="w-4 h-4 mr-1" />
          <span>{achievement.date}</span>
        </div>
        
        <div className="space-y-1">
          {achievement.description.slice(0, 2).map((point, index) => (
            <div key={index} className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-gray-600 text-sm">{point}</span>
            </div>
          ))}
          {achievement.description.length > 2 && (
            <div className="text-gray-500 text-sm italic">
              +{achievement.description.length - 2} more details...
            </div>
          )}
        </div>
        
        <div className="mt-4 text-blue-600 text-sm font-medium">
          Click for details →
        </div>
      </div>
    );
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
            My Achievements
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my professional journey, academic contributions, research projects, and recognition in biotechnology.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center space-x-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{conferences.length}</div>
              <div className="text-gray-600">Conferences</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{internships.length}</div>
              <div className="text-gray-600">Internships</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">{workshops.length}</div>
              <div className="text-gray-600">Workshops</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">{honors.length}</div>
              <div className="text-gray-600">Awards</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">{projects.length}</div>
              <div className="text-gray-600">Projects</div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Star className="w-8 h-8 text-indigo-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Research Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(renderAchievementCard)}
          </div>
        </section>

        {/* Conferences Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Users className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Conferences & Competitions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conferences.map(renderAchievementCard)}
          </div>
        </section>

        {/* Internships Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Briefcase className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Work Experience & Internships</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internships.map(renderAchievementCard)}
          </div>
        </section>

        {/* Workshops Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <GraduationCap className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Workshops & Training</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map(renderAchievementCard)}
          </div>
        </section>

        {/* Honors & Awards Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Trophy className="w-8 h-8 text-yellow-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Honors & Awards</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {honors.map(renderAchievementCard)}
          </div>
        </section>
      </div>

      {/* Modal */}
      {selectedAchievement && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className={`p-6 ${getModalDetails(selectedAchievement).bgColor} ${getModalDetails(selectedAchievement).borderColor} border-b`}>
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  {getModalDetails(selectedAchievement).icon}
                  <div className="ml-4">
                    <h2 className="text-2xl font-bold text-gray-800">{selectedAchievement.title}</h2>
                    <p className="text-gray-600 font-medium">{selectedAchievement.organization}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="p-2 hover:bg-white hover:bg-opacity-50 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
              
              <div className="flex items-center text-gray-600 mt-4">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="mr-6">{selectedAchievement.location}</span>
                <Calendar className="w-4 h-4 mr-2" />
                <span>{selectedAchievement.date}</span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {selectedAchievement.type === 'project' ? 'Project Details' : 
                 selectedAchievement.type === 'honor' ? 'Achievement Details' :
                 'Key Activities & Learning'}
              </h3>
              <div className="space-y-3 mb-6">
                {selectedAchievement.description.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
              
              <div className={`p-4 ${getModalDetails(selectedAchievement).bgColor} rounded-lg`}>
                <h4 className="font-semibold text-gray-800 mb-2">Impact & Value</h4>
                <p className="text-gray-700">{getModalDetails(selectedAchievement).impact}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;
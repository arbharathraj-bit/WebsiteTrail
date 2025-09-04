import React from 'react';
import { MapPin, Calendar, Award, User, Globe, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate biotechnology researcher dedicated to solving environmental challenges through innovative genetic engineering solutions.
          </p>
        </div>

        {/* Profile Photo */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5635AQEF18tJ6dXEQg/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1733153036191?e=1757174400&v=beta&t=fLhHyCC2Yrm6Z8OcgMFrcD0nUDL-cYWsa9opJrlfvcg" 
                alt="Bharathraj Ayyappan" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Biography */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-purple-600" />
            My Journey
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              I am Bharathraj Ayyappan, a Biotechnology graduate from Vels University and a Master's student at 
              Kaunas University of Technology. My interests span molecular biology, genetic engineering, 
              bioinformatics, and sustainable biotechnology, with project experience in plastic biodegradation 
              and bio-carbon capture. Skilled in both wet lab techniques and computational tools, I combine 
              research expertise with creativity as a semi-professional footballer, photographer, and video editor.
            </p>
          </div>
        </div>

        {/* Language Skills */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Globe className="w-6 h-6 text-blue-600" />
              Language Skills
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Mother Tongue</h3>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <span className="text-green-800 font-medium">Tamil</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Other Languages</h3>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-blue-800 font-medium">English</span>
                    <span className="text-blue-600 text-sm font-medium">C1 Proficient</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div>Listening: C1</div>
                    <div>Reading: C1</div>
                    <div>Spoken Production: C1</div>
                    <div>Spoken Interaction: C1</div>
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
                <strong>Levels:</strong> A1 and A2: Basic user; B1 and B2: Independent user; C1 and C2: Proficient user
              </div>
            </div>
          </div>
        </div>

        {/* Current Focus */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-green-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Current Focus Areas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Genetic Engineering</h3>
              <p className="text-gray-600 text-sm">
                Developing modified microorganisms for environmental applications
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Environmental Solutions</h3>
              <p className="text-gray-600 text-sm">
                Creating sustainable biotechnology for pollution control
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Innovation & Entrepreneurship</h3>
              <p className="text-gray-600 text-sm">
                Translating research into viable commercial solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
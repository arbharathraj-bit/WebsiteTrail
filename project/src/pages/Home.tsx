import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Award, ChevronRight, Microscope, Leaf } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-green-800 bg-clip-text text-transparent mb-6 animate-fade-in">
              Bharathraj Ayyappan
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Biotechnology Researcher & Environmental Innovation Entrepreneur
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-600 mb-12">
              <div className="flex items-center gap-2 hover:text-green-600 transition-colors duration-200">
                <MapPin className="w-5 h-5" />
                <span>Chennai, India</span>
              </div>
              <div className="flex items-center gap-2 hover:text-green-600 transition-colors duration-200">
                <Calendar className="w-5 h-5" />
                <span>Born June 21, 2003</span>
              </div>
              <div className="flex items-center gap-2 hover:text-green-600 transition-colors duration-200">
                <Award className="w-5 h-5" />
                <span>Indian National</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
              >
                Explore My Work
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-green-600 text-green-600 px-8 py-3 rounded-full hover:bg-green-600 hover:text-white transition-all duration-200 transform hover:-translate-y-1"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">What I Do</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-600 rounded-xl text-white">
                  <Microscope className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Genetic Engineering Research</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Developing genetically modified microorganisms to solve environmental challenges, 
                including plastic biodegradation using modified Pseudomonas aeruginosa.
              </p>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors duration-200"
              >
                View Research Projects
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-600 rounded-xl text-white">
                  <Leaf className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Environmental Innovation</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Creating sustainable biotechnology solutions including bio carbon capturing 
                systems that convert CO2 into biofuels as diesel alternatives.
              </p>
              <Link
                to="/achievements"
                className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
              >
                View Achievements
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Recent Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="text-green-600 text-sm font-medium mb-2">January 2025</div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">MATLAB Workshop</h3>
              <p className="text-gray-600 text-sm">
                Attending "MATLAB for Lifescience: Unlocking Bioengineering Potential" workshop by ARK INFOSOLUTIONS.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="text-blue-600 text-sm font-medium mb-2">November 2024</div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Startup Pitch</h3>
              <p className="text-gray-600 text-sm">
                Presented Bio Carbon Capturing pitchdeck at FUTUREPRENEUR 2024 by TN CHAMBER MADURAI.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="text-purple-600 text-sm font-medium mb-2">October 2024</div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Research Presentations</h3>
              <p className="text-gray-600 text-sm">
                Presented plastic biodegradation research at BIOCIENCIA 2024 and GENESIS 24 conferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Collaborate?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Let's work together on innovative biotechnology solutions that can make a positive impact on our environment.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
          >
            Start a Conversation
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
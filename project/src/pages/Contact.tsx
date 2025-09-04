import React from 'react';
import { Mail, Phone, MapPin, Linkedin, MessageCircle, Send, User, Globe } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 9094919502",
      href: "tel:+919094919502",
      description: "Available for calls during business hours"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "arbharathraj@gmail.com",
      href: "mailto:arbharathraj@gmail.com",
      description: "Best way to reach me for detailed discussions"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "WhatsApp",
      value: "+91 9094919502",
      href: "https://wa.me/919094919502",
      description: "Quick messages and instant communication"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Bharathraj A",
      href: "https://www.linkedin.com/in/bharathraj-a-52718b229/",
      description: "Professional networking and career updates"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interested in collaborating on biotechnology research, environmental innovation, or discussing breakthrough ideas? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Information</h2>
            
            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="p-3 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 mb-1">{contact.label}</h3>
                    <p className="text-green-600 font-medium mb-2">{contact.value}</p>
                    <p className="text-gray-600 text-sm">{contact.description}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Address */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-600 rounded-xl text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    15/18 Ashwin Aditya apt 15/53<br />
                    Dr Ranga road, Mylapore<br />
                    Chennai, 600004<br />
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form & Additional Info */}
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Send className="w-6 h-6 text-green-600" />
                Let's Start a Conversation
              </h2>
              
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <User className="w-5 h-5 text-green-600" />
                    Research Collaboration
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Interested in collaborating on biotechnology research projects, genetic engineering studies, or environmental sustainability initiatives.
                  </p>
                  <div className="text-xs text-green-700 font-medium">
                    Areas: Genetic Engineering, Environmental Biotechnology, Microbiology
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-600" />
                    Business Opportunities
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Open to discussing startup opportunities, investment possibilities, or commercial applications of biotechnology research.
                  </p>
                  <div className="text-xs text-blue-700 font-medium">
                    Focus: Bio Carbon Capturing, Plastic Biodegradation Solutions
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-purple-600" />
                    Speaking & Presentations
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Available for conference presentations, workshop facilitation, or educational talks on biotechnology and environmental innovation.
                  </p>
                  <div className="text-xs text-purple-700 font-medium">
                    Experience: 6+ Conference Presentations, Multiple Workshops
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Actions */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="mailto:arbharathraj@gmail.com"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <a
                href="https://wa.me/919094919502"
                className="flex items-center justify-center gap-2 border-2 border-green-600 text-green-600 px-6 py-3 rounded-xl font-medium hover:bg-green-600 hover:text-white transition-all duration-200 transform hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Make an Impact?</h2>
          <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
            Whether you're interested in cutting-edge research, sustainable innovation, or the future of biotechnology, 
            I'm always excited to connect with like-minded individuals and organizations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Genetic Engineering</span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Environmental Solutions</span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Research Collaboration</span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Innovation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
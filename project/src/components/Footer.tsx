import React from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { text: 'Home', url: '#home' },
    { text: 'About Us', url: '#about' },
    { text: 'Services', url: '#services' },
    { text: 'Exams', url: '#exams' },
    { text: 'Our Tutors', url: '#team' },
    { text: 'Contact', url: '#contact' }
  ];
  
  const subjects = [
    { text: 'Mathematics', url: '#' },
    { text: 'Physics', url: '#' },
    { text: 'Chemistry', url: '#' },
    { text: 'Biology', url: '#' },
    { text: 'English', url: '#' },
    { text: 'Computer Science', url: '#' }
  ];
  
  const contactInfo = [
    { text: 'Durgapura, Jaipur, Rajasthan 302018' },
    { text: '092517 38974' },
    { text: 'info@thresholdjaipur.com' },
    { text: 'Mon-Sat: 9:00 AM - 8:00 PM' }
  ];

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-slate-700 inline-block">
              Threshold Home Tuition
            </h3>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Jaipur's premier home tutoring service providing qualified, experienced tutors dedicated to student success through personalized learning.
            </p>
            <div className="flex gap-3">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map(platform => (
                <a 
                  key={platform}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center
                    hover:bg-blue-600 transition-all duration-300"
                  aria-label={`Visit our ${platform} page`}
                >
                  <i className={`fab fa-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-slate-700 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url}
                    className="text-slate-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-300"
                  >
                    <ChevronRight size={16} className="text-amber-500" />
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Popular Subjects */}
          <div>
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-slate-700 inline-block">
              Popular Subjects
            </h3>
            <ul className="space-y-2">
              {subjects.map((subject, index) => (
                <li key={index}>
                  <a 
                    href={subject.url}
                    className="text-slate-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-300"
                  >
                    <ChevronRight size={16} className="text-amber-500" />
                    {subject.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-slate-700 inline-block">
              Contact Info
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="text-slate-300 flex gap-2">
                  <i className={`fas fa-${index === 0 ? 'map-marker-alt' : index === 1 ? 'phone' : index === 2 ? 'envelope' : 'clock'} text-amber-500 mt-1.5`}></i>
                  {info.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-6 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Threshold Home Tuition Jaipur. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
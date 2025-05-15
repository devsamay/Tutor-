import React from 'react';
import { GraduationCap, Phone } from 'lucide-react';

const Hero = () => {
  const stats = [
    { number: '500+', label: 'Students Taught' },
    { number: '50+', label: 'Qualified Tutors' },
    { number: '95%', label: 'Success Rate' },
    { number: '15+', label: 'Years Experience' },
  ];

  return (
    <section 
      id="home" 
      className="relative pt-20 min-h-screen bg-gradient-to-br from-blue-600 to-blue-700 flex items-center text-white overflow-hidden"
    >
      {/* Background pattern */}
      <div 
        className="absolute bottom-0 left-0 w-full h-24 bg-wave-pattern bg-repeat-x bg-cover opacity-15"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-4 md:px-6 py-16 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fadeIn">
            Personalized Home Tutoring in Jaipur
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 animate-fadeIn animation-delay-100">
            We connect students with the best qualified home tutors in Jaipur for customized learning experiences that deliver real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fadeIn animation-delay-200">
            <a 
              href="#contact" 
              className="btn bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
            >
              <GraduationCap size={20} />
              Find a Tutor
            </a>
            <a 
              href="#contact" 
              className="btn bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:bg-white/10 transform hover:-translate-y-1 transition duration-300"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 animate-fadeIn animation-delay-300">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20"
              >
                <div className="text-3xl md:text-4xl font-bold mb-1">
                  {stat.number}
                </div>
                <div className="text-sm opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
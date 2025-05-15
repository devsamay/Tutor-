import React from 'react';
import { Check, Star, Clock } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const About = () => {
  const features = [
    {
      icon: <Check size={20} />,
      title: 'Verified Tutors',
      description: 'All tutors undergo background checks and verification'
    },
    {
      icon: <Star size={20} />,
      title: 'Top 1% Selection',
      description: 'Only 1 in 100 applicants become Threshold tutors'
    },
    {
      icon: <Clock size={20} />,
      title: 'Flexible Scheduling',
      description: 'Learn at your convenience with flexible time slots'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Why Choose Threshold?" 
          subtitle="We provide the best home tutors in Jaipur - qualified, experienced, and dedicated to student success."
        />
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <p className="text-slate-700">
              Welcome to <strong>Threshold Home Tuition Jaipur</strong>, your premier destination for quality home tutoring services in Jaipur. We are committed to providing the best home tuition experience for students of all levels.
            </p>
            <p className="text-slate-700">
              Our home tutors are carefully selected through a rigorous screening process to ensure they possess not only academic excellence but also the ability to connect with students and adapt to individual learning styles.
            </p>
            
            <div className="mt-8 space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="bg-blue-600 text-white p-2 rounded-lg shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="btn inline-block bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium mt-6 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
              Get Started
            </a>
          </div>
          
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02] h-full">
              <img 
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Tutor teaching student" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-amber-500 rounded-xl -z-10 opacity-70"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-600 rounded-lg -z-10 opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
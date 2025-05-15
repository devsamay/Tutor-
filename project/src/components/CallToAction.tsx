import React from 'react';
import { Calendar } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
          Ready to Transform Your Child's Learning?
        </h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
          Schedule a free consultation with our education expert to discuss your child's needs and find the perfect tutor match.
        </p>
        <a 
          href="#contact" 
          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 px-6 py-3 
            rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 
            transition-all duration-300"
        >
          <Calendar size={20} />
          Book Free Consultation
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
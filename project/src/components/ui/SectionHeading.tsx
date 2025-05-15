import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = false 
}) => {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
      <h2 className={`text-3xl md:text-4xl font-playfair font-bold text-slate-800 
        relative inline-block ${centered ? 'after:left-1/2 after:-translate-x-1/2' : ''}
        after:content-[''] after:absolute after:w-16 after:h-1 after:bg-amber-500 
        after:bottom-0 after:left-0 after:mt-2 pb-4`}
      >
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-slate-600 text-lg mt-4 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
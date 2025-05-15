import React, { useEffect, useRef } from 'react';
import SectionHeading from './ui/SectionHeading';

const Exams = () => {
  const exams = [
    'CBSE Board', 'ICSE Board', 'RBSE Board', 'JNVST',
    'SSC Exams', 'SSC CGL', 'SBI Clerk', 'CTET',
    'NEET', 'JEE', 'IBPS Exams', 'UGC Net',
    'Civil Services', 'UPSC', 'GATE', 'CAT',
    'CLAT', 'NTSE', 'Olympiads', 'SAT'
  ];
  
  const examListRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && examListRef.current) {
          const examItems = examListRef.current.querySelectorAll('.exam-item');
          examItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-in');
            }, index * 50);
          });
        }
      },
      { threshold: 0.1 }
    );
    
    if (examListRef.current) {
      observer.observe(examListRef.current);
    }
    
    return () => {
      if (examListRef.current) {
        observer.unobserve(examListRef.current);
      }
    };
  }, []);
  
  return (
    <section id="exams" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Exams We Prepare For"
          subtitle="Comprehensive preparation for all major academic and competitive exams"
          centered
        />
        
        <div 
          ref={examListRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-12"
        >
          {exams.map((exam, index) => (
            <div 
              key={index}
              className="exam-item bg-slate-50 p-4 rounded-lg text-center font-medium
                border-l-4 border-blue-600 shadow-sm hover:shadow-md transition-all duration-300
                hover:bg-blue-600 hover:text-white hover:border-l-amber-500 hover:-translate-y-1
                opacity-0 translate-y-4"
            >
              {exam}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exams;
import React from 'react';
import { GraduationCap, Users, Laptop, BookOpen, Brain, TrendingUp } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import ServiceCard from './ui/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: <GraduationCap size={48} />,
      title: 'One-on-One Tutoring',
      description: 'Personalized attention from expert tutors focused on your specific learning needs and goals.'
    },
    {
      icon: <Users size={48} />,
      title: 'Group Classes',
      description: 'Small group sessions for collaborative learning at reduced rates with peers at similar levels.'
    },
    {
      icon: <Laptop size={48} />,
      title: 'Online Tutoring',
      description: 'Virtual learning sessions with our top tutors from the comfort of your home.'
    },
    {
      icon: <BookOpen size={48} />,
      title: 'Exam Preparation',
      description: 'Specialized coaching for board exams, competitive exams, and entrance tests.'
    },
    {
      icon: <Brain size={48} />,
      title: 'Concept Building',
      description: 'Strengthen fundamental concepts in math and science for long-term academic success.'
    },
    {
      icon: <TrendingUp size={48} />,
      title: 'Progress Tracking',
      description: 'Regular assessments and detailed progress reports to monitor improvement.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Our Services" 
          subtitle="Comprehensive tutoring solutions tailored to your educational needs"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index % 3 * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
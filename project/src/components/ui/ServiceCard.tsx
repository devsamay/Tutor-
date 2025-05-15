import React from 'react';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <div 
      className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300
        transform hover:-translate-y-2 group relative overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Top colored border that expands on hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 group-hover:h-2 group-hover:bg-amber-500 transition-all duration-300"></div>
      
      <div className="text-blue-600 mb-6 transition-all duration-300 transform group-hover:scale-110 group-hover:text-amber-500">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
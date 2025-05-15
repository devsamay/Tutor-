import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

interface TeamMember {
  name: string;
  position: string;
  image: string;
  socialLinks: { icon: React.ReactNode; url: string }[];
}

const Team = () => {
  const team: TeamMember[] = [
    {
      name: "Dr. Priya Sharma",
      position: "Physics Expert (PhD, IIT Delhi)",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      socialLinks: [
        { icon: <Linkedin size={18} />, url: "#" },
        { icon: <Twitter size={18} />, url: "#" },
        { icon: <Mail size={18} />, url: "#" }
      ]
    },
    {
      name: "Rahul Verma",
      position: "Mathematics Specialist (M.Sc, B.Ed)",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      socialLinks: [
        { icon: <Linkedin size={18} />, url: "#" },
        { icon: <Twitter size={18} />, url: "#" },
        { icon: <Mail size={18} />, url: "#" }
      ]
    },
    {
      name: "Neha Kapoor",
      position: "English Language Coach (MA, Cambridge CELTA)",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      socialLinks: [
        { icon: <Linkedin size={18} />, url: "#" },
        { icon: <Twitter size={18} />, url: "#" },
        { icon: <Mail size={18} />, url: "#" }
      ]
    },
    {
      name: "Amit Patel",
      position: "Chemistry Expert (M.Sc, PhD Candidate)",
      image: "https://images.unsplash.com/photo-1542190891-2093d38760f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      socialLinks: [
        { icon: <Linkedin size={18} />, url: "#" },
        { icon: <Twitter size={18} />, url: "#" },
        { icon: <Mail size={18} />, url: "#" }
      ]
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Meet Our Expert Tutors"
          subtitle="Highly qualified educators dedicated to student success"
          centered
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300
                transform hover:-translate-y-2 group"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 
                    group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                <p className="text-amber-500 font-medium mb-4">{member.position}</p>
                <div className="flex justify-center gap-3">
                  {member.socialLinks.map((link, i) => (
                    <a 
                      key={i}
                      href={link.url}
                      className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center
                        hover:bg-blue-600 hover:text-white transition-all duration-300"
                      aria-label={`${member.name}'s social link`}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
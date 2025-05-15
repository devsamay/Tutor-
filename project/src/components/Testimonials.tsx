import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const testimonials = [
  {
    content: "Threshold Home Tuition transformed my daughter's performance in mathematics. Within just 3 months, her grades improved from C to A. The tutor was patient, knowledgeable, and knew exactly how to explain concepts in a way she could understand.",
    name: "Mrs. Sharma",
    position: "Parent of Class 9 Student",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5
  },
  {
    content: "I was struggling with Physics for my JEE preparation. My Threshold tutor not only helped me understand complex concepts but also taught me effective problem-solving techniques. I secured AIR 1245 and got into my dream college!",
    name: "Rahul Mehta",
    position: "JEE Aspirant",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.5
  },
  {
    content: "As a working parent, I appreciate how Threshold manages all the scheduling and ensures the tutor arrives on time. My son's English has improved dramatically, and he's now more confident in school. Highly recommended!",
    name: "Mr. Gupta",
    position: "Parent of Class 6 Student",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} size={16} className="fill-amber-500 text-amber-500" />);
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star size={16} className="text-amber-500" />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <Star size={16} className="fill-amber-500 text-amber-500" />
          </div>
        </div>
      );
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={16} className="text-amber-200" />);
    }
    
    return stars;
  };
  
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="What Parents & Students Say"
          subtitle="Success stories from our satisfied students and parents"
          centered
        />
        
        <div className="mt-12 relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl p-8 shadow-lg relative">
                    <div className="text-4xl absolute top-8 left-8 text-blue-100 font-serif">"</div>
                    <div className="relative z-10">
                      <p className="text-slate-700 mb-6 italic relative z-10">
                        {testimonial.content}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-slate-500 text-sm">{testimonial.position}</p>
                          <div className="flex mt-1">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md
              hover:bg-blue-600 hover:text-white transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md
              hover:bg-blue-600 hover:text-white transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-blue-600 w-6' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [success, setSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to a server
    console.log('Form submitted:', formData);
    setSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };
  
  const contactInfo = [
    { 
      icon: <MapPin size={20} className="text-amber-500" />, 
      text: "ANIRUDH APARTMENT, Plot no. 324, near Durgapura Railway Station, Shri Vihar, Mahaveer Nagar, Durgapura, Jaipur, Rajasthan 302018" 
    },
    { 
      icon: <Phone size={20} className="text-amber-500" />, 
      text: "092517 38974",
      link: "tel:09251738974"
    },
    { 
      icon: <Mail size={20} className="text-amber-500" />, 
      text: "info@thresholdjaipur.com",
      link: "mailto:info@thresholdjaipur.com"
    },
    { 
      icon: <Clock size={20} className="text-amber-500" />, 
      text: "Monday-Saturday: 9:00 AM - 8:00 PM" 
    }
  ];
  
  const socialLinks = [
    { icon: <Facebook size={20} />, url: "#" },
    { icon: <Twitter size={20} />, url: "#" },
    { icon: <Instagram size={20} />, url: "#" },
    { icon: <Linkedin size={20} />, url: "#" },
    { icon: <Youtube size={20} />, url: "#" }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Contact Us"
          subtitle="Get in touch to find the perfect tutor for your needs"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Contact Information */}
          <div className="bg-white rounded-xl p-8 shadow-md relative overflow-hidden group">
            {/* Side border that expands on hover */}
            <div className="absolute top-0 left-0 h-full w-1 bg-blue-600 group-hover:w-2 
              group-hover:bg-amber-500 transition-all duration-300"></div>
            
            <h3 className="text-xl font-semibold text-blue-600 mb-6">Our Office</h3>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1 shrink-0">{item.icon}</div>
                  <div>
                    {item.link ? (
                      <a href={item.link} className="text-slate-700 hover:text-blue-600 transition-colors">
                        {item.text}
                      </a>
                    ) : (
                      <p className="text-slate-700">{item.text}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Follow Us</h3>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center
                    hover:bg-blue-600 hover:text-white transition-all duration-300"
                  aria-label="Social media link"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-6">Send Us a Message</h3>
            
            {success && (
              <div className="bg-green-100 border border-green-200 text-green-800 rounded-lg p-4 mb-6">
                <p className="font-medium">Thank you for your message!</p>
                <p>We've received your inquiry and will get back to you shortly.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-slate-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 
                      focus:ring focus:ring-blue-200 transition-colors outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 
                      focus:ring focus:ring-blue-200 transition-colors outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium text-slate-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 
                      focus:ring focus:ring-blue-200 transition-colors outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium text-slate-700">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 
                      focus:ring focus:ring-blue-200 transition-colors outline-none"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Science">Science</option>
                    <option value="English">English</option>
                    <option value="Social Studies">Social Studies</option>
                    <option value="Competitive Exams">Competitive Exams</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-slate-700">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 
                      focus:ring focus:ring-blue-200 transition-colors outline-none resize-y"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white 
                    px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transform 
                    hover:-translate-y-1 transition-all duration-300"
                >
                  <Mail size={20} />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Google Map */}
        <div className="mt-12 rounded-xl overflow-hidden shadow-lg h-96">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.854768809908!2d75.78621431504453!3d26.91241208313057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6b5b8a5e6f5%3A0x3a9f5a7a3a6a3a6a!2sDurgapura%20Railway%20Station!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
            className="w-full h-full"
            title="Office Location"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
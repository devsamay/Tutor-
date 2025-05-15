import React from 'react';
import { BookOpen } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Exams from './components/Exams';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="font-poppins text-slate-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Exams />
        <Testimonials />
        <Team />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
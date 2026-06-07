import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-dark-400">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent-primary z-50 origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <FloatingWhatsApp />
      
      {/* Footer مع توقيع المطور */}
      <footer className="bg-dark-200 py-8 text-center border-t border-white/10">
        <p className="text-gray-400">
          © 2024 محمود حسني - جميع الحقوق محفوظة
        </p>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-500 text-sm mt-2"
        >
          تم التطوير بواسطة 
          <span className="gradient-text font-semibold"> إسلام حمدى</span>
          <span className="inline-block ml-1">🚀</span>
        </motion.p>
      </footer>
    </div>
  );
}

export default App;

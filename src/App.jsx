import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { useLanguage } from './context/LanguageContext';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-dark-400" dir={language === 'ar' ? 'rtl' : 'ltr'}>
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
      
      {/* Footer مع توقيع المطور المترجم */}
      <footer className="bg-dark-200 py-8 text-center border-t border-white/10">
        <p className="text-gray-400">
          {t('footer.rights')} - {t('names.designer')} © 2026
        </p>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-500 text-sm mt-2"
        >
          {t('footer.developed')} 
          <motion.a
            href="https://github.com/Islam412"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="gradient-text font-semibold cursor-pointer inline-flex items-center gap-1 hover:gap-2 transition-all mx-1"
          >
            {t('names.developer')}
            <svg className="w-4 h-4 inline-block" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.195.69.795.575C20.565 21.795 24 17.303 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </motion.a>
          <span className="inline-block mr-1">🚀</span>
        </motion.p>
      </footer>
    </div>
  );
}

export default App;

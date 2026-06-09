import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-accent-primary/20 rounded-full filter blur-3xl animate-float top-20 -left-48"></div>
        <div className="absolute w-96 h-96 bg-accent-secondary/20 rounded-full filter blur-3xl animate-float bottom-20 -right-48" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`flex-1 text-center ${language === 'ar' ? 'lg:text-right' : 'lg:text-left'}`}
          >
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <span className="text-accent-primary text-lg font-semibold">{t('hero.badge')}</span>
              <h1 className="text-5xl lg:text-7xl font-bold mt-4">
                <span className="gradient-text">{t('hero.name')}</span>
              </h1>
              <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto lg:mx-0">
                {t('hero.description')}
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className={`flex flex-wrap gap-4 justify-center ${language === 'ar' ? 'lg:justify-start' : 'lg:justify-start'} mt-8`}>
              <a href="#portfolio" className="px-8 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full text-white font-semibold hover:shadow-lg hover:shadow-accent-primary/50 transition-all transform hover:scale-105">
                {t('hero.cta1')}
              </a>
              <a href="#contact" className="px-8 py-3 border-2 border-accent-primary rounded-full text-accent-primary font-semibold hover:bg-accent-primary hover:text-white transition-all">
                {t('hero.cta2')}
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className={`flex gap-8 justify-center ${language === 'ar' ? 'lg:justify-start' : 'lg:justify-start'} mt-12`}>
              <div><div className="text-3xl font-bold gradient-text">5+</div><div className="text-gray-400 text-sm">{t('hero.years')}</div></div>
              <div><div className="text-3xl font-bold gradient-text">200+</div><div className="text-gray-400 text-sm">{t('hero.projects')}</div></div>
              <div><div className="text-3xl font-bold gradient-text">100+</div><div className="text-gray-400 text-sm">{t('hero.clients')}</div></div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="flex-1">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-accent-primary/50 shadow-2xl">
                <img src="/images/portfolio/mahmoud.jpg" alt={t('names.designer')} className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a href="#services" className="text-gray-400 hover:text-accent-primary transition-colors">
            <ArrowDownIcon className="w-8 h-8" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

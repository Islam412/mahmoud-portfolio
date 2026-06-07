import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaPaintBrush, FaTag, FaInstagram, FaPrint, FaBuilding } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t, language } = useLanguage();

  const icons = [FaPaintBrush, FaTag, FaInstagram, FaPrint, FaBuilding];
  const iconColors = ['#e94560', '#533483', '#e4405f', '#10b981', '#f59e0b'];

  return (
    <section id="about" className="py-20 bg-dark-200" ref={ref}>
      <div className="container mx-auto px-6" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('about.title')}</span> {t('about.titleHighlight')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold gradient-text mb-4">{t('about.role')}</h3>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              {t('about.desc1')}
            </p>
            <p className="text-gray-400 mb-8 text-lg">
              {t('about.desc2')}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {t('about.services').map((service, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="glass-effect rounded-xl p-4 text-center group cursor-pointer"
                  >
                    <Icon className="w-10 h-10 mx-auto mb-2 transition-transform group-hover:scale-110" style={{ color: iconColors[index % iconColors.length] }} />
                    <p className="text-white text-sm font-semibold">{service}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

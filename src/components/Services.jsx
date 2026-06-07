import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PaintBrushIcon, SwatchIcon, CameraIcon, DocumentDuplicateIcon, GlobeAltIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t, language } = useLanguage();

  const icons = [PaintBrushIcon, SwatchIcon, CameraIcon, DocumentDuplicateIcon, GlobeAltIcon, ChatBubbleLeftRightIcon];
  const colors = ['from-pink-500 to-rose-500', 'from-purple-500 to-indigo-500', 'from-blue-500 to-cyan-500', 'from-green-500 to-emerald-500', 'from-orange-500 to-red-500', 'from-teal-500 to-green-500'];

  const servicesItems = t('services.items');

  return (
    <section id="services" className="py-20 bg-dark-400" ref={ref}>
      <div className="container mx-auto px-6" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('services.title')}</span> {t('services.titleHighlight')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t('services.subtitle')}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesItems.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-2xl p-8 hover:shadow-2xl hover:shadow-accent-primary/20 transition-all cursor-pointer group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${colors[index % colors.length]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                <div className="w-0 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary mt-4 group-hover:w-full transition-all duration-300"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

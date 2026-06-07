import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t, language } = useLanguage();

  const contactMethods = [
    {
      icon: FaPhoneAlt,
      title: t('contact.calls'),
      info: '+20 11 43064305',
      action: 'tel:+201143064305',
      color: '#10b981',
      bg: 'from-green-500 to-emerald-500'
    },
    {
      icon: FaWhatsapp,
      title: t('contact.whatsapp'),
      info: '+20 11 43064305',
      action: 'https://wa.me/201143064305',
      color: '#25d366',
      bg: 'from-green-600 to-green-500'
    },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: FaFacebook, url: 'https://www.facebook.com/share/1BBR3BTnnd/', color: '#1877f2' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/mahmoud.hosni22', color: '#e4405f' },
    { name: 'TikTok', icon: FaTiktok, url: 'https://www.tiktok.com/@mahmoudhosni895', color: '#000000' },
    { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://wa.me/201143064305', color: '#25d366' },
  ];

  return (
    <section id="contact" className="py-20 bg-dark-400" ref={ref}>
      <div className="container mx-auto px-6" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('contact.title')}</span> {t('contact.titleHighlight')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* طرق التواصل */}
          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? -50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold gradient-text text-center lg:text-right">
              {t('contact.infoTitle')}
            </h3>
            
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.action}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: language === 'ar' ? -5 : 5 }}
                className="glass-effect rounded-2xl p-6 flex items-center gap-6 hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${method.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white">{method.title}</h4>
                  <p className="text-accent-primary text-lg font-mono">{method.info}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* وسائل التواصل الاجتماعي */}
          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? 50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
                {t('contact.socialTitle')}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-effect rounded-xl p-4 text-center hover:shadow-xl transition-all group"
                  >
                    <social.icon 
                      className="w-12 h-12 mx-auto mb-2 transition-transform group-hover:scale-110" 
                      style={{ color: social.color }}
                    />
                    <span className="text-white font-semibold text-sm">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* روابط سريعة */}
            <div className="glass-effect rounded-2xl p-8 mt-6">
              <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
                {t('contact.quickLinks')}
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: language === 'ar' ? -10 : 10 }}
                    className="flex items-center justify-between p-3 rounded-xl bg-dark-200 hover:bg-gradient-to-r hover:from-accent-primary/20 hover:to-accent-secondary/20 transition-all group"
                  >
                    <span className="flex items-center gap-3">
                      <social.icon className="w-6 h-6" style={{ color: social.color }} />
                      <span className="text-white font-medium">{social.name}</span>
                    </span>
                    <span className="text-accent-primary group-hover:translate-x-1 transition-transform">➔</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

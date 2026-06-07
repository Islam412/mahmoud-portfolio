import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { PhoneIcon, EnvelopeIcon, GlobeAltIcon, ChatBubbleLeftRightIcon, LinkIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'مكالمات واتساب',
      info: '+20 11 43064305',
      action: 'tel:+201143064305',
      bg: 'from-green-500 to-emerald-500',
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'واتساب',
      info: '+20 11 43064305',
      action: 'https://wa.me/201143064305',
      bg: 'from-teal-500 to-green-500',
    },
  ];

  const socialLinks = [
    {
      name: 'فيسبوك',
      url: 'https://www.facebook.com/share/1BBR3BTnnd/',
      icon: '📘',
      bg: 'from-blue-600 to-blue-700',
    },
    {
      name: 'انستجرام',
      url: 'https://www.instagram.com/mahmoud.hosni22',
      icon: '📷',
      bg: 'from-pink-500 to-purple-600',
    },
    {
      name: 'تيك توك',
      url: 'https://www.tiktok.com/@mahmoudhosni895',
      icon: '🎵',
      bg: 'from-black to-gray-800',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-dark-400" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            تواصل <span className="gradient-text">معي</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            هل لديك مشروع في ذهنك؟ دعنا نناقشه معاً ونحوله إلى واقع مبدع
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold gradient-text text-center lg:text-right">
              معلومات التواصل
            </h3>
            
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.action}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: -5 }}
                className="glass-effect rounded-2xl p-6 flex items-center gap-6 hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white">{info.title}</h4>
                  <p className="text-accent-primary">{info.info}</p>
                </div>
              </motion.a>
            ))}

            <div className="glass-effect rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4 text-center lg:text-right">
                وسائل التواصل الاجتماعي
              </h4>
              <div className="flex justify-center lg:justify-start gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${social.bg} flex flex-col items-center justify-center gap-1 hover:shadow-xl transition-all`}
                  >
                    <span className="text-2xl">{social.icon}</span>
                    <span className="text-white text-xs">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
                روابط سريعة
              </h3>
              <div className="space-y-4">
                <a 
                  href="https://www.facebook.com/share/1BBR3BTnnd/"
                  target="_blank"
                  className="flex items-center justify-between p-4 rounded-xl bg-dark-200 hover:bg-gradient-to-r hover:from-accent-primary/20 hover:to-accent-secondary/20 transition-all group"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-2xl">📘</span>
                    <span className="text-white">فيسبوك</span>
                  </span>
                  <LinkIcon className="w-5 h-5 text-accent-primary group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a 
                  href="https://www.instagram.com/mahmoud.hosni22"
                  target="_blank"
                  className="flex items-center justify-between p-4 rounded-xl bg-dark-200 hover:bg-gradient-to-r hover:from-accent-primary/20 hover:to-accent-secondary/20 transition-all group"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-2xl">📷</span>
                    <span className="text-white">انستجرام</span>
                  </span>
                  <LinkIcon className="w-5 h-5 text-accent-primary group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a 
                  href="https://www.tiktok.com/@mahmoudhosni895"
                  target="_blank"
                  className="flex items-center justify-between p-4 rounded-xl bg-dark-200 hover:bg-gradient-to-r hover:from-accent-primary/20 hover:to-accent-secondary/20 transition-all group"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-2xl">🎵</span>
                    <span className="text-white">تيك توك</span>
                  </span>
                  <LinkIcon className="w-5 h-5 text-accent-primary group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

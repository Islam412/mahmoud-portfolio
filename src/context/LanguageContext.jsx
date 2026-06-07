import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
  ar: {
    // أسماء
    names: {
      designer: 'محمود حسني',
      developer: 'إسلام حمدى'
    },
    // شريط التنقل
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      portfolio: 'أعمالي',
      about: 'عني',
      contact: 'اتصل بي'
    },
    // القسم الرئيسي
    hero: {
      badge: 'مصمم جرافيك محترف',
      name: 'محمود حسني',
      description: 'أحول أفكارك إلى واقع مبدع | تصميم لوحات - لوجوهات - مطبوعات - سوشيال ميديا',
      cta1: 'مشاهدة أعمالي',
      cta2: 'تواصل معي',
      years: 'سنوات خبرة',
      projects: 'مشروع مكتمل',
      clients: 'عميل سعيد'
    },
    // الخدمات
    services: {
      title: 'الخدمات',
      titleHighlight: 'التي أقدمها',
      subtitle: 'أحول أفكارك إلى تصاميم إبداعية تجذب الانتباه وتحقق أهدافك',
      items: [
        { title: 'تصميم لوحات', desc: 'تصميم لوحات فنية احترافية بأسلوب عصري ومبدع' },
        { title: 'تصميم لوجو', desc: 'هوية بصرية فريدة تعبر عن شخصية علامتك التجارية' },
        { title: 'السوشيال ميديا', desc: 'تصاميم جذابة لمنصات التواصل الاجتماعي' },
        { title: 'المطبوعات', desc: 'جميع أنواع المطبوعات الدعائية والرسمية' },
        { title: 'وجهات كلادينج', desc: 'تصاميم كلادينج احترافية للمباني والواجهات' },
        { title: 'دعم مستمر', desc: 'دعم فني ومتابعة مستمرة لجميع المشاريع' }
      ]
    },
    // أعمالي
    portfolio: {
      title: 'أعمالي',
      titleHighlight: 'المميزة',
      subtitle: 'مجموعة من أحدث تصاميمي التي تعكس شغفي بالإبداع والتميز'
    },
    // عني
    about: {
      title: 'من',
      titleHighlight: 'هو محمود حسني؟',
      role: 'مصمم جرافيك محترف',
      desc1: 'أنا محمود حسني، مصمم جرافيك بشغف كبير للإبداع والتميز. أؤمن بأن التصميم الجيد ليس مجرد شكل جميل، بل هو رسالة تنقل فكرتك للعالم بأفضل صورة.',
      desc2: 'أقدم تصاميم فريدة تجمع بين الجمال والوظيفة، وأحرص على فهم احتياجات عملائي لتقديم أفضل الحلول الإبداعية في:',
      services: ['تصميم لوحات', 'تصميم لوجو', 'سوشيال ميديا', 'مطبوعات', 'وجهات كلادينج']
    },
    // اتصل بي
    contact: {
      title: 'تواصل',
      titleHighlight: 'معي',
      subtitle: 'هل لديك مشروع في ذهنك؟ دعنا نناقشه معاً ونحوله إلى واقع مبدع',
      infoTitle: 'معلومات التواصل',
      calls: 'مكالمات واتساب',
      whatsapp: 'واتساب',
      socialTitle: 'وسائل التواصل الاجتماعي',
      quickLinks: 'روابط سريعة'
    },
    // التذييل
    footer: {
      rights: 'جميع الحقوق محفوظة',
      developed: 'تم التطوير بواسطة'
    }
  },
  en: {
    // Names
    names: {
      designer: 'Mahmoud Hosni',
      developer: 'Islam Hamdy'
    },
    // Navigation
    nav: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      about: 'About',
      contact: 'Contact'
    },
    // Hero Section
    hero: {
      badge: 'Professional Graphic Designer',
      name: 'Mahmoud Hosni',
      description: 'Turning your ideas into creative reality | Art Boards - Logos - Prints - Social Media',
      cta1: 'View My Work',
      cta2: 'Contact Me',
      years: 'Years Experience',
      projects: 'Completed Projects',
      clients: 'Happy Clients'
    },
    // Services
    services: {
      title: 'Services',
      titleHighlight: 'I Provide',
      subtitle: 'I turn your ideas into creative designs that grab attention and achieve your goals',
      items: [
        { title: 'Art Boards', desc: 'Professional artistic board designs in a modern and creative style' },
        { title: 'Logo Design', desc: 'Unique visual identity that expresses your brand personality' },
        { title: 'Social Media', desc: 'Attractive designs for social media platforms' },
        { title: 'Print Design', desc: 'All types of promotional and official prints' },
        { title: 'Cladding', desc: 'Professional cladding designs for buildings and facades' },
        { title: '24/7 Support', desc: 'Technical support and continuous follow-up for all projects' }
      ]
    },
    // Portfolio
    portfolio: {
      title: 'My',
      titleHighlight: 'Portfolio',
      subtitle: 'A collection of my latest designs that reflect my passion for creativity and excellence'
    },
    // About
    about: {
      title: 'Who is',
      titleHighlight: 'Mahmoud Hosni?',
      role: 'Professional Graphic Designer',
      desc1: 'I am Mahmoud Hosni, a graphic designer with a great passion for creativity and excellence. I believe that good design is not just a beautiful shape, but a message that conveys your idea to the world in the best possible way.',
      desc2: 'I provide unique designs that combine beauty and functionality, and I strive to understand my clients needs to provide the best creative solutions in:',
      services: ['Art Boards', 'Logo Design', 'Social Media', 'Print Design', 'Cladding']
    },
    // Contact
    contact: {
      title: 'Contact',
      titleHighlight: 'Me',
      subtitle: 'Do you have a project in mind? Let\'s discuss it together and turn it into a creative reality',
      infoTitle: 'Contact Information',
      calls: 'Calls & WhatsApp',
      whatsapp: 'WhatsApp',
      socialTitle: 'Social Media',
      quickLinks: 'Quick Links'
    },
    // Footer
    footer: {
      rights: 'All Rights Reserved',
      developed: 'Developed by'
    }
  }
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ar');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const t = (path) => {
    const keys = path.split('.');
    let value = translations[language];
    for (const key of keys) {
      value = value?.[key];
    }
    return value || path;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

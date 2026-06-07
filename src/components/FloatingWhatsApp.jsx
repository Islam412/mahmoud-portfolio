import React from 'react';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/201143064305"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4 shadow-2xl transition-all"
      style={{
        boxShadow: '0 0 20px rgba(34,197,94,0.5)',
      }}
    >
      <svg
        className="w-8 h-8 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12.032 2.016c-5.52 0-10 4.48-10 10 0 1.728.432 3.36 1.248 4.8L2 21.984l5.28-1.248c1.392.768 2.976 1.248 4.752 1.248 5.52 0 10-4.48 10-10s-4.48-10-10-10zm0 18.4c-1.44 0-2.784-.384-3.96-1.056l-.288-.168-3.168.768.816-3.072-.192-.312c-.72-1.2-1.152-2.592-1.152-4.08 0-4.416 3.552-8 7.968-8 4.416 0 8 3.584 8 8s-3.584 8-8 8zm4.368-6.048c-.24-.12-1.392-.672-1.608-.768-.216-.096-.384-.144-.528.144-.144.288-.576.768-.72.96-.144.192-.288.216-.528.096-.24-.12-1.008-.36-1.92-1.152-.72-.624-1.2-1.392-1.344-1.632-.144-.24-.024-.36.096-.48.12-.12.24-.288.36-.432.12-.144.192-.24.288-.408.096-.168.048-.312-.024-.432-.072-.12-.528-1.248-.72-1.704-.192-.456-.384-.384-.528-.384h-.48c-.144 0-.384.048-.576.24-.192.192-.72.696-.72 1.704 0 1.008.72 1.992.816 2.136.096.144 1.392 2.112 3.36 2.976 1.968.864 1.968.576 2.328.528.36-.048 1.152-.456 1.32-.912.168-.456.168-.84.12-.912-.048-.072-.144-.12-.288-.192z"/>
      </svg>
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute inset-0 rounded-full bg-green-500 -z-10"
      />
    </motion.a>
  );
};

export default FloatingWhatsApp;

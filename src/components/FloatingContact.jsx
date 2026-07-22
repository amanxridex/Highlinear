import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const contactOptions = [
    { 
      id: 'whatsapp', 
      icon: <MessageCircle size={20} />, 
      label: 'WhatsApp', 
      href: 'https://wa.me/919876543210', // Placeholder
      color: 'bg-green-500 hover:bg-green-600'
    },
    { 
      id: 'call', 
      icon: <Phone size={20} />, 
      label: 'Call Us', 
      href: 'tel:+919876543210', 
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    { 
      id: 'email', 
      icon: <Mail size={20} />, 
      label: 'Email Us', 
      href: 'mailto:info@highlinear.com', 
      color: 'bg-red-500 hover:bg-red-600'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Expanded Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-3 mb-4 items-end"
          >
            {contactOptions.map((option, index) => (
              <motion.a
                key={option.id}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 group"
              >
                <span className="bg-white text-gray-800 text-sm font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-200">
                  {option.label}
                </span>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-colors ${option.color}`}>
                  {option.icon}
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={toggleMenu}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#FF5722] hover:bg-orange-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-orange-500/30 transition-colors z-50 relative"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default FloatingContact;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import aiLogo from '../assets/ailogo_minimal.png';

const FloatingAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        // Positioned at the bottom right. Using fixed to keep it out of the normal document flow
        className="fixed bottom-8 right-8 pointer-events-auto z-[101] flex flex-col items-end gap-4"
        style={{ touchAction: 'none' }}
      >
        {/* Assistant Dialog Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-[#0e102f]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl w-80 cursor-default"
              onPointerDownCapture={(e) => e.stopPropagation()} // Prevent dragging when interacting with panel
            >
              <div className="flex justify-between items-center mb-4">
                <div className="font-bold text-sm text-[#b6c4ff] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse drop-shadow-[0_0_5px_rgba(96,165,250,0.8)]"></span>
                  Suqoon Intelligence
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              </div>
              
              <p className="text-xs text-gray-300 leading-relaxed mb-5">
                How can I assist you with your platform infrastructure today?
              </p>
              
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Ask a question..." 
                  className="bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-xs w-full focus:outline-none focus:border-blue-500/50 text-white placeholder-gray-500 transition-colors"
                />
                <button className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 p-2 rounded-lg transition-colors flex items-center justify-center">
                  <span className="material-symbols-outlined text-[16px]">send</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Avatar Button */}
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-[50%] bg-gradient-to-tr from-[#161a3d]/80 to-[#0e102f]/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,188,212,0.12)] border border-white/[0.04] flex items-center justify-center cursor-pointer group relative z-50"
        >
          {/* Subtle hover glow increase */}
          <div className="absolute inset-0 rounded-[50%] bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_20px_rgba(0,188,212,0.2)]"></div>
          
          <img 
            src={aiLogo} 
            alt="Suqoon AI" 
            className="w-[75%] h-[75%] object-contain relative z-10 transition-transform duration-300 rounded-full invert opacity-85 mix-blend-screen"
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default FloatingAssistant;

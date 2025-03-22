import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Name Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            Hi, I'm <span className="text-indigo-600">Babita Awasthi</span>
          </motion.h1>

          {/* Title Animation */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-600 mb-8"
          >
            Full Stack Developer
          </motion.p>

          {/* Icons Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex justify-center space-x-6"
          >
            <a href="https://github.com/Babita00" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors"> 
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/babita-awasthi-4aa3b5304/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors"> 
              <Linkedin size={24} />
            </a>
            <a href="mailto:devbabita07@gmail.com" className="text-gray-600 hover:text-indigo-600 transition-colors"> 
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

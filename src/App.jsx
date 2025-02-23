import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 text-gray-900">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }} // Commence invisible et à gauche
        animate={{ opacity: 1, x: 0 }} // Arrive visible et au centre
        transition={{ duration: 1.5, delay: 0.1 }} // Plus lent avec un petit délai
      >
        <Header />
      </motion.div>

      {/* Main Content */}
      <main className="container mx-auto max-w-6xl px-6 py-16 space-y-20">
        
        {/* Section Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }} // Commence invisible et en bas
          animate={{ opacity: 1, y: 0 }} // Arrive visible et au centre
          transition={{ duration: 1.5, delay: 0.2 }} // Plus lent avec un délai plus long
        >
          <Hero />
        </motion.div>

        {/* Grid principale */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-12">
            {/* Section About */}
            <motion.div 
              initial={{ opacity: 0, x: -100 }} // Commence invisible et à gauche
              animate={{ opacity: 1, x: 0 }} // Arrive visible et au centre
              transition={{ duration: 1.5, delay: 0.3 }} // Plus lent avec un délai
            >
              <About />
            </motion.div>
            {/* Section Experience */}
            <motion.div 
              initial={{ opacity: 0, x: 100 }} // Commence invisible et à droite
              animate={{ opacity: 1, x: 0 }} // Arrive visible et au centre
              transition={{ duration: 1.5, delay: 0.4 }} // Plus lent avec un délai
            >
              <Experience />
            </motion.div>
          </div>
          <div className="space-y-12">
            {/* Section Skills */}
            <motion.div 
              initial={{ opacity: 0, y: 100 }} // Commence invisible et en bas
              animate={{ opacity: 1, y: 0 }} // Arrive visible et au centre
              transition={{ duration: 1.5, delay: 0.5 }} // Plus lent avec un délai
            >
              <Skills />
            </motion.div>
            {/* Section Projects */}
            <motion.div 
              initial={{ opacity: 0, x: -100 }} // Commence invisible et à gauche
              animate={{ opacity: 1, x: 0 }} // Arrive visible et au centre
              transition={{ duration: 1.5, delay: 0.6 }} // Plus lent avec un délai
            >
              <Projects />
            </motion.div>
          </div>
        </div>

        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }} // Commence invisible et en bas
          animate={{ opacity: 1, y: 0 }} // Arrive visible et au centre
          transition={{ duration: 1.5, delay: 0.7 }} // Plus lent avec un délai
        >
          <Contact />
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white text-center py-6 mt-16">
        <p className="text-lg">© 2025 Hanan Aabout - Tous droits réservés.</p>
      </footer>
    </div>
  );
}

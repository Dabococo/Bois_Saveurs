'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-wood-dark text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div>
            <h3 className="text-xl font-bold mb-4">Bois-et-saveurs.fr</h3>
            <p className="text-white/90">
              Votre spécialiste des planches en bois artisanales
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-white/90">
              <p>
                <a href="mailto:contact@bois-et-saveurs.fr" className="hover:text-white transition-colors">
                  contact@bois-et-saveurs.fr
                </a>
              </p>
              <p>
                <a href="tel:+33765154965" className="hover:text-white transition-colors">
                  +33 7 65 15 49 65
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Adresse</h3>
            <p className="text-white/90">
              16 140 Charmé<br />
              France
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 pt-8 border-t border-white/20 text-center text-white/90"
        >
          <p>© 2025 Bois-et-saveurs.fr. Tous droits réservés.</p>
        </motion.div>
      </div>
    </footer>
  );
}


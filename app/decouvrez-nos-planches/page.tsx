'use client';

import Section from '@/components/Section';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function DecouvrezNosPlanches() {
  const planches = [
    {
      id: 1,
      name: 'Planche 120cm',
      description: 'Planche longue et élégante, parfaite pour les grandes présentations. Son design unique suit la courbe naturelle du bois, rendant chaque planche aussi singulière que l\'arbre dont elle est issue.',
      image: '/images/Planche_120cm_1.jpeg',
      dimensions: '120cm x 25cm',
      poignees: '1 poignée',
      epaisseur: '2,5cm',
      features: [
        'Bois de hêtre français',
        'Fabrication artisanale en Charente',
        'Finition à l\'huile de pépins de raisin',
        'Food contact compliance',
        'Rainure pour évacuer le jus',
        'Poignée pour transporter et suspendre',
      ],
      usages: 'Fromages & charcuterie, tapas, tartes, pâtisseries, légumes, poissons et viandes grillées',
    },
    {
      id: 2,
      name: 'Planche 100cm',
      description: 'Planche large et spacieuse, idéale pour les présentations généreuses. Son format rectangulaire offre une grande surface de service tout en conservant l\'authenticité du bois naturel.',
      image: '/images/Planche_100cm_1.jpeg',
      dimensions: '100cm x 40cm',
      poignees: '2 poignées',
      epaisseur: '2,5cm',
      features: [
        'Bois de hêtre français',
        'Fabrication artisanale en Charente',
        'Finition à l\'huile de pépins de raisin',
        'Food contact compliance',
        'Rainure pour évacuer le jus',
        'Deux poignées pour un transport facile',
      ],
      usages: 'Fromages & charcuterie, tapas, tartes, pâtisseries, légumes, poissons et viandes grillées',
    },
  ];

  return (
    <>
      <Section className="bg-gradient-to-br from-accent-beige via-white to-wood-light/10 pt-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-wood-dark mb-6">
              Découvrez nos planches
            </h1>
            <p className="text-xl text-wood-medium max-w-3xl mx-auto mb-4">
              La planche Bois&Saveurs est élégante et naturelle. Son design unique et authentique est inspiré du Chili.
            </p>
            <p className="text-lg text-wood-medium max-w-3xl mx-auto">
              Le bois est travaillé de manière à suivre la courbe naturelle de ses veines et la forme de son écorce, 
              rendant chaque planche aussi singulière que l'arbre dont elle est issue.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {planches.map((planche, index) => (
              <motion.div
                key={planche.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group"
              >
                <div className="relative h-74 overflow-hidden bg-accent-beige/20">
                  <Image
                    src={planche.image}
                    alt={planche.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full bg-wood-light/20 flex items-center justify-center text-wood-medium text-2xl">Image à ajouter</div>';
                      }
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-wood-dark mb-4">
                    {planche.name}
                  </h3>
                  <p className="text-wood-medium mb-4 leading-relaxed">
                    {planche.description}
                  </p>
                  
                  {/* Spécifications */}
                  <div className="bg-wood-dark text-white rounded-lg p-4 mb-6">
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div>
                        <p className="font-semibold mb-1">Dimensions</p>
                        <p className="text-wood-light">{planche.dimensions}</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Poignées</p>
                        <p className="text-wood-light">{planche.poignees}</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Épaisseur</p>
                        <p className="text-wood-light">{planche.epaisseur}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-wood-dark mb-3">Caractéristiques :</h4>
                    <ul className="space-y-2">
                      {planche.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-wood-medium">
                          <span className="text-accent-green mr-2 mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {planche.usages && (
                    <div className="bg-accent-beige/30 rounded-lg p-4">
                      <p className="text-sm font-semibold text-wood-dark mb-2">Idéale pour :</p>
                      <p className="text-wood-medium text-sm">{planche.usages}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-accent-beige/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-wood-dark mb-6">
              Un savoir-faire artisanal
            </h2>
            <p className="text-lg text-wood-medium mb-4">
              <strong>2 modèles de planches</strong> sont commercialisés en boutique et sont disponibles en nous envoyant une demande à :{' '}
              <a href="mailto:contact@bois-et-saveurs.fr" className="text-wood-dark underline font-semibold hover:text-wood-medium">
                contact@bois-et-saveurs.fr
              </a>
            </p>
            <p className="text-lg text-wood-medium mb-4">
              Sa <strong>grande taille</strong> attire l'attention et donne un <strong>aspect raffiné et original pour le service</strong>.
            </p>
            <p className="text-lg text-wood-medium mb-4">
              C'est également un bel objet qui apporte de l'élégance à votre intérieur.
            </p>
            <p className="text-lg text-wood-medium mb-8">
              La planche Bois&Saveurs <strong>présente vos préparations culinaires</strong> et associe l'<strong>esthétique</strong>, 
              les <strong>saveurs</strong> et l'<strong>expérience gustative</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg">
                <div className="text-4xl mb-4">🇫🇷</div>
                <h3 className="font-bold text-wood-dark mb-2">Made in France</h3>
                <p className="text-wood-medium">Fabrication artisanale française</p>
              </div>
              <div className="p-6 bg-white rounded-lg">
                <div className="text-4xl mb-4">🌳</div>
                <h3 className="font-bold text-wood-dark mb-2">Bois sélectionnés</h3>
                <p className="text-wood-medium">Matériaux de première qualité</p>
              </div>
              <div className="p-6 bg-white rounded-lg">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="font-bold text-wood-dark mb-2">Finitions soignées</h3>
                <p className="text-wood-medium">Chaque détail compte</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}


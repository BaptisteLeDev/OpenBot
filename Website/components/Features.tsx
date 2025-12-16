"use client";

import { motion } from "framer-motion";
import { useState } from "react";

/**
 * Liste des fonctionnalités du bot OpenBot
 * @type {Array<{title: string, description: string, icon: string}>}
 */
const features = [
  {
    title: "Création de parties",
    description: "Créez et configurez vos parties OpenFront en quelques commandes Discord",
    icon: "🎮",
  },
  {
    title: "Configuration en temps réel",
    description: "Ajustez les paramètres de jeu directement depuis votre serveur Discord",
    icon: "⚙️",
  },
  {
    title: "API WebSocket",
    description: "Communication en temps réel entre Discord et OpenFront via WebSocket",
    icon: "🔌",
  },
  {
    title: "Gestion des joueurs",
    description: "Invitez, gérez et suivez vos joueurs facilement",
    icon: "👥",
  },
  {
    title: "Notifications",
    description: "Recevez des notifications sur l'état de vos parties",
    icon: "🔔",
  },
  {
    title: "Commandes intuitives",
    description: "Interface de commandes simple et facile à utiliser",
    icon: "💬",
  },
];

/**
 * Composant Features - Présentation des fonctionnalités
 * 
 * Affiche une grille de cartes présentant les fonctionnalités principales du bot OpenBot.
 * Chaque carte inclut une icône, un titre et une description avec des animations au scroll.
 * 
 * @returns {JSX.Element} Section features avec grille de cartes animées
 * 
 * @example
 * ```tsx
 * <Features />
 * ```
 */
export default function Features() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Fonctionnalités
          </h2>
          <p className="text-xl text-discord-lightGray max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour gérer vos parties OpenFront
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-discord-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
              
              {/* Animated border gradient on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-discord-primary to-discord-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

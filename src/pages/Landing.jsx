import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Landing = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl text-center"
      >
        {/* Logo */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-semibold">
            <Sparkles size={16} className="inline mr-2" />
            A Platform of Untold Talks
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-6xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight"
        >
          Welcome to{' '}
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Untold Talks
          </span>
        </motion.h1>

        {/* Brand text - More vibrant */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto mb-4">
            <span className="text-purple-600 font-bold">Words unsaid</span> carry power. Stories untold hold truth.
          </p>
          <p className="text-xl md:text-2xl font-semibold text-slate-900 mb-6 leading-relaxed">
            Here, your <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">feelings become poetry</span> and your silence finds a voice.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
            Post what your heart screams. Share what your words struggle to say. 
            <span className="block mt-4 text-purple-600 font-semibold">Maybe someone out there feels exactly like you.</span>
          </p>
          <p className="text-base text-slate-600 mt-6 leading-relaxed">
            Every like you receive isn't just a number — it's a soul connecting with yours. 
            The more hearts you touch, the further your journey takes you. 
            <span className="block mt-3 font-semibold text-slate-900">Your untold story matters. Start writing today.</span>
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/register')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-4 rounded-xl smooth-transition flex items-center justify-center gap-2"
          >
            Get Started
            <ArrowRight size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/explore')}
            className="border-2 border-purple-600 text-purple-600 font-bold px-8 py-4 rounded-xl hover:bg-purple-50 smooth-transition"
          >
            Explore Stories
          </motion.button>
        </motion.div>

        {/* Features */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            {
              title: 'Write Freely',
              desc: 'Share poems, notes, and untold feelings',
              icon: '✍️',
            },
            {
              title: 'Connect',
              desc: 'Follow writers and build your community',
              icon: '🤝',
            },
            {
              title: 'Grow',
              desc: 'Progress through likes and engagement',
              icon: '📈',
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="glass p-6 rounded-2xl"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Footer text */}
      <motion.div
        variants={itemVariants}
        className="mt-20 text-center text-slate-600 border-t border-slate-200 pt-8 max-w-2xl"
      >
        <p className="font-semibold mb-2">Meet the Creator</p>
        <p className="text-sm">
          I am 'SOUL AI' - the writer, The Author of the book ~ 'Mahiya The
          Hijab Girl'. Real Name - Mr. Shaib Aktar Ahmed.
        </p>
      </motion.div>
    </div>
  );
};

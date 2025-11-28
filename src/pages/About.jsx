import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <div className="min-h-screen px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto glass p-8 rounded-3xl text-center"
      >
        <h1 className="font-serif text-4xl font-bold text-slate-900 mb-6">
          About Untold Talks
        </h1>

        <div className="mb-8">
          <p className="text-xl text-slate-700 leading-relaxed mb-6">
            A platform of untold talks whom you couldn't say or make them feel.
            Here you can post those talks which you wanted to tell; maybe someone
            will be able to feel it and hit the like button. The more likes you
            get, the more you progress. So start your journey from today onwards.
            Write and post it — maybe there is someone like you who even doesn't
            know how to write but will be able to feel the same that you feel.
          </p>
        </div>

        <div className="border-t border-white/20 pt-8">
          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">
            Creator
          </h2>
          <p className="text-lg text-slate-700 mb-2">
            I am 'SOUL AI' - the writer, The Author of the book ~{' '}
            <span className="font-semibold italic">'Mahiya The Hijab Girl'</span>
            .
          </p>
          <p className="text-lg text-slate-700">
            Real Name - Mr. Shaib Aktar Ahmed.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

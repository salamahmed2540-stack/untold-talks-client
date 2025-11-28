import React from 'react';
import { motion } from 'framer-motion';

export const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <h1 className="font-serif text-4xl font-bold text-slate-900 mb-8">
            Terms of Service
          </h1>

          <div className="space-y-8 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Untold Talks ("the Platform"), you accept and agree to be
                bound by the terms and provision of this agreement. If you do not agree to abide by
                the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information
                or software) on Untold Talks for personal, non-commercial transitory viewing only.
                This is the grant of a license, not a transfer of title, and under this license you
                may not:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the Platform</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Content</h2>
              <p>
                You retain all rights to any content you submit, post or display on or through the
                Platform. By submitting content, you grant Untold Talks a worldwide, non-exclusive,
                royalty-free license to use, reproduce, modify and distribute such content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Prohibited Content</h2>
              <p>You agree not to post content that is:</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Hateful, threatening, abusive, or defamatory</li>
                <li>Sexually explicit or obscene</li>
                <li>Spam or commercial in nature</li>
                <li>Violates intellectual property rights</li>
                <li>Promotes illegal activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. User Accounts</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account and password
                and for restricting access to your computer. You agree to accept responsibility for
                all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
              <p>
                In no event shall Untold Talks or its suppliers be liable for any damages (including,
                without limitation, damages for loss of data or profit, or due to business
                interruption) arising out of the use or inability to use the materials on Untold Talks.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Modifications</h2>
              <p>
                Untold Talks may revise these terms of service for its website at any time without
                notice. By using this website, you are agreeing to be bound by the then current
                version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws
                of the jurisdiction in which Untold Talks operates, and you irrevocably submit to the
                exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-600">
                Last Updated: November 28, 2025
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';

export const Legal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <h1 className="font-serif text-4xl font-bold text-slate-900 mb-8">
            Legal & Copyright
          </h1>

          <div className="space-y-8 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">© Copyright Notice</h2>
              <p>
                © 2025 Untold Talks. All rights reserved. The content, design, graphics, and all
                other materials on the Untold Talks platform are the intellectual property of
                Untold Talks or our content suppliers and are protected by international copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Intellectual Property Rights</h2>
              <p>
                All text, graphics, logos, images, and software contained on the Untold Talks
                platform are the property of Untold Talks, its content suppliers, or other parties
                that have licensed their material to us. These materials may not be republished,
                reproduced, redistributed, or rewritten without explicit written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">User Content Ownership</h2>
              <p>
                You retain all intellectual property rights to the content you create and post on
                Untold Talks. By posting content, you grant Untold Talks a worldwide, non-exclusive,
                royalty-free, perpetual, irrevocable license to use, reproduce, modify, and
                distribute your content for the operation and improvement of our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Trademark</h2>
              <p>
                "Untold Talks" and related logos are trademarks of Untold Talks. You may not use
                these trademarks without prior written permission from Untold Talks.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">User Responsibilities</h2>
              <p>Users are responsible for:</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>
                  Ensuring their content does not infringe upon the rights of others
                </li>
                <li>
                  Not posting copyrighted material without permission
                </li>
                <li>
                  Respecting the intellectual property rights of other users
                </li>
                <li>
                  Following all applicable laws and regulations
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">DMCA Compliance</h2>
              <p>
                Untold Talks respects intellectual property rights and complies with the Digital
                Millennium Copyright Act (DMCA). If you believe your copyrighted material has been
                posted on our platform without authorization, please contact us with:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>A description of the copyrighted work</li>
                <li>The location on the platform</li>
                <li>Your contact information</li>
                <li>A statement under penalty of perjury</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Disclaimer</h2>
              <p>
                THE PLATFORM AND ALL MATERIALS ON IT ARE PROVIDED ON AN "AS IS" BASIS WITHOUT
                WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. UNTOLD TALKS DISCLAIMS ALL
                WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
                MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Liability Limitation</h2>
              <p>
                IN NO EVENT SHALL UNTOLD TALKS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, EVEN IF ADVISED OF THE
                POSSIBILITY OF SUCH DAMAGES.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Content Removal</h2>
              <p>
                Untold Talks reserves the right to remove any content that violates these terms,
                applicable laws, or community guidelines. Users whose content is repeatedly removed
                may have their accounts suspended or terminated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact for Legal Issues</h2>
              <p>
                For all legal inquiries, copyright issues, or complaints, please contact us at:
              </p>
              <p className="mt-4 font-semibold">
                Email: legal@untoldtalks.com
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

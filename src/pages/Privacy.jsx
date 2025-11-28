import React from 'react';
import { motion } from 'framer-motion';

export const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <h1 className="font-serif text-4xl font-bold text-slate-900 mb-8">
            Privacy Policy
          </h1>

          <div className="space-y-8 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
              <p>
                Untold Talks ("we," "us," or "our") operates the Untold Talks website and mobile
                application. This page informs you of our policies regarding the collection, use,
                and disclosure of personal data when you use our Service and the choices you have
                associated with that data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information Collection</h2>
              <p>We collect several different types of information:</p>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900">Personal Data:</h3>
                  <p>
                    Email address, name, username, password, profile information, and any content
                    you create or upload.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Usage Data:</h3>
                  <p>
                    Browser type, IP address, pages visited, time and date of visits, and other
                    diagnostic data.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Cookies:</h3>
                  <p>
                    We use cookies to enhance your experience. You can instruct your browser to
                    refuse all cookies or alert you when a cookie is being sent.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Use of Data</h2>
              <p>Untold Talks uses the collected data for various purposes:</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information for improving our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Security</h2>
              <p>
                The security of your data is important to us, but remember that no method of
                transmission over the Internet or method of electronic storage is 100% secure. While
                we strive to use commercially acceptable means to protect your Personal Data, we
                cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Third-Party Links</h2>
              <p>
                Our Service may contain links to other sites that are not operated by us. If you
                click on a third-party link, you will be directed to that third party's site. We
                strongly advise you to review the Privacy Policy of every site you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Your Privacy Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request restriction of processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Children's Privacy</h2>
              <p>
                Our Service does not address anyone under the age of 13. We do not knowingly collect
                personally identifiable information from children under 13. If we become aware that a
                child under 13 has provided us with personal information, we will delete such
                information immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes
                by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-4 font-semibold">
                Email: privacy@untoldtalks.com
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

import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Untold Talks</h3>
            <p className="text-slate-400 text-sm">
              A platform where your untold stories find their voice.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/explore" className="hover:text-white transition">
                  Explore
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/legal" className="hover:text-white transition">
                  Copyright & Legal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Email: support@untoldtalks.com</li>
              <li>Legal: legal@untoldtalks.com</li>
              <li>Privacy: privacy@untoldtalks.com</li>
            </ul>
          </div>

          {/* Follow Developer */}
          <div>
            <h4 className="font-semibold mb-4">Follow Developer</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="https://instagram.com/shaibz01" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Instagram - shaibz01
                </a>
              </li>
              <li>
                <a href="https://twitter.com/shaibz01" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Twitter - shaibz01
                </a>
              </li>
              <li>
                <a href="https://facebook.com/shaibz01" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Facebook - shaibz01
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © {currentYear} Untold Talks. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm flex items-center gap-2">
              Made with <Heart size={16} className="text-red-500" /> for storytellers
            </p>
          </div>

          {/* Legal Notice */}
          <div className="mt-6 pt-6 border-t border-slate-700">
            <p className="text-slate-500 text-xs">
              Untold Talks is a platform for sharing stories and creative expression. All user
              content remains the intellectual property of the user. By using this platform, you
              agree to our Terms of Service and Privacy Policy. © 2025 Untold Talks. All rights
              reserved. No part of this website may be reproduced without permission.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

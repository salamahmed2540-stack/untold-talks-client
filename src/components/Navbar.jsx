import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut, Settings, Bell, Search, Home, Compass } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { authAPI } from '../utils/api';

export const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await authAPI.logout();
      logout();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="glass sticky top-0 z-50 px-6 py-4 rounded-b-3xl"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-serif text-2xl font-bold text-purple-600">
          Untold Talks
        </Link>

        {/* Navigation links */}
        {user && (
          <div className="hidden md:flex gap-6 items-center">
            <Link
              to="/feed"
              className="flex items-center gap-2 text-slate-700 hover:text-purple-600 smooth-transition"
            >
              <Home size={20} />
              Feed
            </Link>
            <Link
              to="/explore"
              className="flex items-center gap-2 text-slate-700 hover:text-purple-600 smooth-transition"
            >
              <Compass size={20} />
              Explore
            </Link>
            <button className="flex items-center gap-2 text-slate-700 hover:text-purple-600 smooth-transition">
              <Search size={20} />
            </button>
          </div>
        )}

        {/* User menu */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link
                to={`/user/${user.username}`}
                className="text-sm font-semibold text-slate-700 hover:text-purple-600 smooth-transition"
              >
                {user.penName || user.username}
              </Link>
              <Link to="/notifications" className="text-slate-700 hover:text-purple-600 smooth-transition">
                <Bell size={20} />
              </Link>
              <Link to="/settings" className="text-slate-700 hover:text-purple-600 smooth-transition">
                <Settings size={20} />
              </Link>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleLogout}
                className="text-red-500 hover:text-red-700 smooth-transition"
              >
                <LogOut size={20} />
              </motion.button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate('/login')}
                className="text-slate-700 hover:text-purple-600 smooth-transition font-semibold"
              >
                Log In
              </button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/register')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg smooth-transition"
              >
                Sign Up
              </motion.button>
            </>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

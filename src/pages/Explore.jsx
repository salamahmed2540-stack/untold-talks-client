import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PostCard } from '../components/PostCard';
import { postAPI } from '../utils/api';

export const Explore = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('trending');

  const fetchExplore = async () => {
    try {
      setLoading(true);
      const response = await postAPI.getExplore(1, sortBy);
      setPosts(response.data.posts);
    } catch (error) {
      console.error('Error fetching explore:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExplore();
  }, [sortBy]);

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="font-serif text-4xl font-bold text-slate-900 mb-4">
            Explore
          </h1>
          <div className="flex gap-3">
            <button
              onClick={() => setSortBy('trending')}
              className={`px-4 py-2 rounded-lg font-semibold smooth-transition ${
                sortBy === 'trending'
                  ? 'bg-purple-500 text-white'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              Trending
            </button>
            <button
              onClick={() => setSortBy('newest')}
              className={`px-4 py-2 rounded-lg font-semibold smooth-transition ${
                sortBy === 'newest'
                  ? 'bg-purple-500 text-white'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              Newest
            </button>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-block text-4xl"
            >
              ✨
            </motion.div>
            <p className="text-slate-600 mt-4">Discovering stories...</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-600">No posts found.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} onLikeChange={fetchExplore} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

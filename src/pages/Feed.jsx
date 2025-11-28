import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PostEditor } from '../components/PostEditor';
import { PostCard } from '../components/PostCard';
import { postAPI } from '../utils/api';
import { useAuth } from '../hooks/useAuth';

export const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user } = useAuth();

  const fetchFeed = async () => {
    try {
      setLoading(true);
      const response = await postAPI.getFeed();
      setPosts(response.data.posts);
    } catch (err) {
      setError('Failed to load feed');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <PostEditor onPostCreated={fetchFeed} />

        {loading ? (
          <div className="text-center py-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-block"
            >
              ✨
            </motion.div>
            <p className="text-slate-600 mt-4">Loading your feed...</p>
          </div>
        ) : error ? (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg text-center">
            {error}
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-600">
              No posts yet. Follow some users to see their stories!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard
                key={post._id}
                post={post}
                onLikeChange={fetchFeed}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

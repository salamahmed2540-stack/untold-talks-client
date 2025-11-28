import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader } from 'lucide-react';
import { emotionEmojis } from '../utils/helpers';
import { postAPI } from '../utils/api';

const EMOTIONS = Object.keys(emotionEmojis);

export const PostEditor = ({ onPostCreated }) => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    emotionTags: [],
    tags: [],
    isAnonymous: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const toggleEmotion = (emotion) => {
    setFormData((prev) => ({
      ...prev,
      emotionTags: prev.emotionTags.includes(emotion)
        ? prev.emotionTags.filter((e) => e !== emotion)
        : [...prev.emotionTags, emotion],
    }));
  };

  const handleTagsChange = (e) => {
    const tags = e.target.value.split(',').map((tag) => tag.trim());
    setFormData((prev) => ({ ...prev, tags }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await postAPI.create(formData);
      setFormData({
        title: '',
        body: '',
        emotionTags: [],
        tags: [],
        isAnonymous: false,
      });
      onPostCreated?.();
    } catch (err) {
      setError(
        err.response?.data?.message ||
          'Failed to create post. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-8 rounded-3xl max-w-2xl mx-auto mb-8"
    >
      <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">
        Share Your Untold
      </h2>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Give your piece a title..."
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Your Story
          </label>
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
            rows={8}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            placeholder="Write your poem, note, or untold feelings..."
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-3">
            How does this make you feel?
          </label>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
            {EMOTIONS.map((emotion) => (
              <motion.button
                key={emotion}
                type="button"
                onClick={() => toggleEmotion(emotion)}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-lg text-center smooth-transition ${
                  formData.emotionTags.includes(emotion)
                    ? 'bg-purple-500 text-white shadow-lg'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                <div className="text-xl mb-1">{emotionEmojis[emotion]}</div>
                <div className="text-xs font-semibold capitalize">{emotion}</div>
              </motion.button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Tags (comma-separated, optional)
          </label>
          <input
            type="text"
            onChange={handleTagsChange}
            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="poetry, confession, life, dreams"
          />
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="isAnonymous"
            id="anonymous"
            checked={formData.isAnonymous}
            onChange={handleChange}
            className="w-4 h-4 rounded"
          />
          <label htmlFor="anonymous" className="text-sm text-slate-700">
            Post anonymously
          </label>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-lg smooth-transition disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader size={20} className="animate-spin" />
              Publishing...
            </>
          ) : (
            <>
              <Send size={20} />
              Publish
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

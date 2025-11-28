import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import { formatDate, emotionColors, emotionEmojis } from '../utils/helpers';
import { likeAPI } from '../utils/api';

export const PostCard = ({ post, onLikeChange }) => {
  const [isLiked, setIsLiked] = useState(
    post.likes?.includes(localStorage.getItem('userId'))
  );
  const [likesCount, setLikesCount] = useState(post.likesCount || 0);

  const handleLike = async () => {
    try {
      if (isLiked) {
        await likeAPI.unlike(post._id);
        setLikesCount(likesCount - 1);
      } else {
        await likeAPI.like(post._id);
        setLikesCount(likesCount + 1);
      }
      setIsLiked(!isLiked);
      onLikeChange?.();
    } catch (error) {
      console.error('Like error:', error);
    }
  };

  const displayName = post.author?.penName || post.author?.username;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-6 rounded-2xl mb-4 hover:shadow-xl transition-all"
    >
      {/* Author info */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-serif text-lg font-bold text-slate-900">
            {displayName}
          </h3>
          <p className="text-xs text-slate-500">
            {formatDate(post.createdAt)}
          </p>
        </div>
        {post.readingTime && (
          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
            {post.readingTime} min read
          </span>
        )}
      </div>

      {/* Post title */}
      <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">
        {post.title}
      </h2>

      {/* Post body preview */}
      <p className="text-slate-700 mb-4 line-clamp-3">{post.body}</p>

      {/* Emotion tags */}
      {post.emotionTags && post.emotionTags.length > 0 && (
        <div className="flex gap-2 mb-4 flex-wrap">
          {post.emotionTags.map((emotion) => (
            <span
              key={emotion}
              className={`emotion-badge ${emotionColors[emotion]}`}
            >
              {emotionEmojis[emotion]} {emotion}
            </span>
          ))}
        </div>
      )}

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="flex gap-2 mb-4 flex-wrap">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-4 pt-4 border-t border-white/20">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleLike}
          className={`flex items-center gap-2 text-sm smooth-transition ${
            isLiked ? 'text-red-500' : 'text-slate-600 hover:text-red-500'
          }`}
        >
          <Heart size={20} fill={isLiked ? 'currentColor' : 'none'} />
          <span>{likesCount}</span>
        </motion.button>
        <button className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-500 smooth-transition">
          <MessageCircle size={20} />
          <span>0</span>
        </button>
        <button className="flex items-center gap-2 text-sm text-slate-600 hover:text-green-500 smooth-transition">
          <Bookmark size={20} />
        </button>
        <button className="flex items-center gap-2 text-sm text-slate-600 hover:text-purple-500 smooth-transition ml-auto">
          <Share2 size={20} />
        </button>
      </div>
    </motion.div>
  );
};

// Emotion tag to color mapping
export const emotionColors = {
  joy: 'emotion-joy',
  sadness: 'emotion-sadness',
  hopeful: 'emotion-hopeful',
  melancholy: 'emotion-melancholy',
  angry: 'emotion-angry',
  peaceful: 'emotion-peaceful',
  nostalgic: 'emotion-nostalgic',
  inspired: 'emotion-inspired',
  lost: 'emotion-lost',
  grateful: 'emotion-grateful',
};

export const emotionEmojis = {
  joy: '😊',
  sadness: '😢',
  hopeful: '🌅',
  melancholy: '🎵',
  angry: '😤',
  peaceful: '🧘',
  nostalgic: '🌙',
  inspired: '✨',
  lost: '🌪️',
  grateful: '🙏',
};

export const formatDate = (date) => {
  const d = new Date(date);
  const now = new Date();
  const diff = Math.floor((now - d) / 1000);

  if (diff < 60) return 'just now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;

  return d.toLocaleDateString();
};

export const calculateReadingTime = (text) => {
  const wordsCount = text.split(/\s+/).length;
  return Math.ceil(wordsCount / 200);
};

import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
});

// Add token to requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  register: (data) => API.post('/auth/register', data),
  login: (data) => API.post('/auth/login', data),
  logout: () => API.post('/auth/logout'),
};

export const postAPI = {
  create: (data) => API.post('/posts', data),
  getPost: (postId) => API.get(`/posts/${postId}`),
  getFeed: (page = 1) => API.get(`/posts/feed/home?page=${page}`),
  getExplore: (page = 1, sortBy = 'trending') =>
    API.get(`/posts/explore/trending?page=${page}&sortBy=${sortBy}`),
  deletePost: (postId) => API.delete(`/posts/${postId}`),
};

export const likeAPI = {
  like: (postId) => API.post(`/likes/${postId}/like`),
  unlike: (postId) => API.delete(`/likes/${postId}/like`),
};

export const userAPI = {
  getProfile: (username) => API.get(`/users/${username}`),
  follow: (username) => API.post(`/users/${username}/follow`),
  unfollow: (username) => API.delete(`/users/${username}/follow`),
};

export default API;

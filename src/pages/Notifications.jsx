import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bell, Check, CheckCircle2, Trash2 } from 'lucide-react';
import API from '../utils/api';
import { useAuth } from '../hooks/useAuth';

export const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, unread, read
  const { user } = useAuth();

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const response = await API.get('/notifications');
      setNotifications(response.data.notifications);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (notificationId) => {
    try {
      await API.patch(`/notifications/${notificationId}/read`);
      setNotifications((prev) =>
        prev.map((notif) =>
          notif._id === notificationId ? { ...notif, isRead: true } : notif
        )
      );
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  const markAllAsRead = async () => {
    try {
      await API.patch('/notifications/read/all');
      setNotifications((prev) =>
        prev.map((notif) => ({ ...notif, isRead: true }))
      );
    } catch (error) {
      console.error('Error marking all as read:', error);
    }
  };

  const deleteNotification = (notificationId) => {
    setNotifications((prev) =>
      prev.filter((notif) => notif._id !== notificationId)
    );
  };

  const filteredNotifications = notifications.filter((notif) => {
    if (filter === 'unread') return !notif.isRead;
    if (filter === 'read') return notif.isRead;
    return true;
  });

  const getNotificationMessage = (notif) => {
    const actor = notif.actor?.penName || notif.actor?.username || 'Someone';
    switch (notif.type) {
      case 'like':
        return `${actor} liked your post "${notif.post?.title || 'Untitled'}"`;
      case 'follow':
        return `${actor} started following you`;
      case 'post':
        return `${actor} published a new post`;
      default:
        return 'New notification';
    }
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'like':
        return '❤️';
      case 'follow':
        return '👥';
      case 'post':
        return '✍️';
      default:
        return '🔔';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Bell size={32} className="text-purple-600" />
              <h1 className="font-serif text-4xl font-bold text-slate-900">
                Notifications
              </h1>
            </div>
            {notifications.some((n) => !n.isRead) && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={markAllAsRead}
                className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
              >
                <CheckCircle2 size={18} />
                Mark All Read
              </motion.button>
            )}
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-4 mb-6">
            {['all', 'unread', 'read'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-lg capitalize font-semibold transition ${
                  filter === tab
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab} ({notifications.filter((n) => 
                  tab === 'all' ? true : tab === 'unread' ? !n.isRead : n.isRead
                ).length})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Notifications List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin">
              <Bell size={40} className="text-purple-600" />
            </div>
            <p className="text-slate-600 mt-4">Loading notifications...</p>
          </div>
        ) : filteredNotifications.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-2xl p-12 text-center"
          >
            <Bell size={48} className="text-slate-300 mx-auto mb-4" />
            <p className="text-slate-600 text-lg">
              {filter === 'all'
                ? "You're all caught up! No notifications yet."
                : `No ${filter} notifications`}
            </p>
          </motion.div>
        ) : (
          <div className="space-y-3">
            {filteredNotifications.map((notification, index) => (
              <motion.div
                key={notification._id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`p-5 rounded-xl backdrop-blur-sm transition ${
                  notification.isRead
                    ? 'bg-white/50 border border-slate-200'
                    : 'bg-purple-50 border-2 border-purple-300'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="text-3xl mt-1">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-900 font-semibold">
                        {getNotificationMessage(notification)}
                      </p>
                      <p className="text-sm text-slate-500 mt-1">
                        {new Date(notification.createdAt).toLocaleDateString(
                          'en-US',
                          {
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          }
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    {!notification.isRead && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => markAsRead(notification._id)}
                        className="p-2 hover:bg-purple-100 rounded-lg transition"
                        title="Mark as read"
                      >
                        <Check size={18} className="text-purple-600" />
                      </motion.button>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => deleteNotification(notification._id)}
                      className="p-2 hover:bg-red-100 rounded-lg transition"
                      title="Delete"
                    >
                      <Trash2 size={18} className="text-red-500" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

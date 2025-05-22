
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Check, X } from "lucide-react";
import { useState } from "react";

interface NotificationsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

export function NotificationsPanel({ isOpen, onClose }: NotificationsPanelProps) {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "New Report Available",
      message: "Q2 Analytics report is now available for viewing.",
      time: "10 min ago",
      read: false,
    },
    {
      id: 2,
      title: "System Update",
      message: "The system will be updated on June 15th at 3:00 PM.",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 3,
      title: "New User Registration",
      message: "A new user has registered and is pending approval.",
      time: "2 hours ago",
      read: true,
    },
    {
      id: 4,
      title: "Server Maintenance",
      message: "Scheduled maintenance completed successfully.",
      time: "Yesterday",
      read: true,
    },
  ]);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  const unreadCount = notifications.filter(notification => !notification.read).length;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/20" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div 
            className="fixed top-16 right-6 z-50 w-80 rounded-lg border bg-card text-card-foreground shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-4 border-b flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <h3 className="font-semibold">Notifications</h3>
                {unreadCount > 0 && (
                  <span className="inline-flex h-5 items-center justify-center rounded-full bg-primary px-2 text-xs font-medium text-primary-foreground">
                    {unreadCount}
                  </span>
                )}
              </div>
              <button 
                onClick={markAllAsRead}
                className="text-xs text-primary hover:underline"
              >
                Mark all as read
              </button>
            </div>
            <div className="max-h-[350px] overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="p-4 text-center text-muted-foreground">
                  No notifications yet
                </div>
              ) : (
                notifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className={`p-3 border-b last:border-0 hover:bg-muted/50 transition-colors relative ${notification.read ? '' : 'bg-primary/5'}`}
                  >
                    {!notification.read && (
                      <span className="absolute left-3 top-4 h-2 w-2 rounded-full bg-primary"></span>
                    )}
                    <div className={`${!notification.read ? 'pl-4' : ''}`}>
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-sm">{notification.title}</h4>
                        <div className="flex gap-1">
                          <button 
                            onClick={() => markAsRead(notification.id)}
                            className="text-muted-foreground hover:text-foreground"
                            title="Mark as read"
                          >
                            <Check className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{notification.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="p-3 border-t text-center">
              <button className="text-sm text-primary hover:underline">
                View all notifications
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

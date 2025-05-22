
import { useState } from "react";
import { UserProfile } from "@/components/dashboard/UserProfile";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Search, Menu } from "lucide-react";
import { NotificationsPanel } from "@/components/dashboard/NotificationsPanel";
import { useSidebar } from "@/components/ui/sidebar";

export function DashboardHeader() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const { toggleSidebar } = useSidebar();
  
  return (
    <motion.header
      className="flex items-center justify-between border-b px-6 py-3 bg-background"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 rounded-full hover:bg-muted"
          aria-label="Toggle sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="flex items-center bg-muted/40 dark:bg-muted rounded-full px-3 py-1.5 focus-within:ring-1 focus-within:ring-ring w-[240px]">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            className="border-0 bg-transparent text-sm focus:outline-none focus:ring-0 w-full ml-2 placeholder:text-muted-foreground text-foreground"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button 
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="p-2 rounded-full hover:bg-muted relative"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          {notificationsOpen && (
            <NotificationsPanel 
              isOpen={notificationsOpen} 
              onClose={() => setNotificationsOpen(false)} 
            />
          )}
        </div>
        <button 
          onClick={() => setProfileOpen(!profileOpen)} 
          className="flex items-center space-x-2"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src="" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </button>
      </div>
      <UserProfile isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
    </motion.header>
  );
}

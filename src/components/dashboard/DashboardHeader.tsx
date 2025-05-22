
import { useState } from "react";
import { Bell, Search } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserProfile } from "./UserProfile";

export function DashboardHeader() {
  const [showUserProfile, setShowUserProfile] = useState(false);

  return (
    <motion.header
      className="flex h-16 items-center border-b px-6"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex w-full items-center justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search..."
            className="w-full bg-muted/10 pl-8 py-2 text-sm rounded-lg border border-input"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-muted-foreground hover:text-foreground">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-destructive" />
          </button>
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setShowUserProfile(!showUserProfile)}
          >
            <Avatar className="h-9 w-9">
              <AvatarImage src="" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
          <UserProfile isOpen={showUserProfile} onClose={() => setShowUserProfile(false)} />
        </div>
      </div>
    </motion.header>
  );
}


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { LogOut, Settings, User } from "lucide-react";

interface UserProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UserProfile({ isOpen, onClose }: UserProfileProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/20" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div 
            className="fixed top-16 right-6 z-50 w-72 rounded-lg border bg-card text-card-foreground shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-6 flex flex-col items-center border-b">
              <Avatar className="h-20 w-20 mb-4">
                <AvatarImage src="" />
                <AvatarFallback className="text-xl">JD</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-lg">John Doe</h3>
              <p className="text-muted-foreground">john.doe@example.com</p>
              <div className="mt-2 px-3 py-1 bg-primary/10 text-xs rounded-full">
                Administrator
              </div>
            </div>
            <div className="p-2">
              <Link 
                to="/settings"
                onClick={onClose}
                className="flex w-full items-center gap-2 rounded-md p-2 text-left text-sm hover:bg-muted"
              >
                <User className="h-4 w-4" />
                <span>My Profile</span>
              </Link>
              <Link 
                to="/settings"
                onClick={onClose}
                className="flex w-full items-center gap-2 rounded-md p-2 text-left text-sm hover:bg-muted"
              >
                <Settings className="h-4 w-4" />
                <span>Account Settings</span>
              </Link>
              <button 
                className="flex w-full items-center gap-2 rounded-md p-2 text-left text-sm hover:bg-muted text-destructive"
                onClick={onClose}
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

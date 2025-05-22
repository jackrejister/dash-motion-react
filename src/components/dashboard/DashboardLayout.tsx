
import { useState, useEffect } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { ThemeProvider } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeProvider>
      <SidebarProvider>
        <div className={cn("min-h-screen flex w-full bg-background")}>
          <DashboardSidebar />
          <motion.div 
            className="flex flex-col flex-1 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <DashboardHeader />
            <main className="flex-1 overflow-auto">
              {children}
            </main>
          </motion.div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}

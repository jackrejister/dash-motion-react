
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { motion } from "framer-motion";
import {
  BarChart2,
  ChevronLeft,
  ChevronRight,
  Home,
  LayoutDashboard,
  LineChart,
  Settings,
  Users,
} from "lucide-react";

export function DashboardSidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { icon: Home, label: "Home", href: "/home" },
    { icon: LayoutDashboard, label: "Dashboard", href: "/" },
    { icon: BarChart2, label: "Analytics", href: "/analytics" },
    { icon: LineChart, label: "Reports", href: "/reports" },
    { icon: Users, label: "Users", href: "/users" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  // Function to determine if a menu item is active
  const isActive = (href: string) => {
    return location.pathname === href;
  };

  // Function to toggle sidebar collapse state
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sidebar
      className={cn("border-r border-border bg-sidebar")}
    >
      <SidebarHeader className="flex items-center justify-between px-4 py-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2"
        >
          {!collapsed && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="font-bold text-xl"
            >
              Insight <span className="text-primary">Pulse</span>
            </motion.div>
          )}
          <SidebarTrigger className="ml-auto">
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </SidebarTrigger>
        </motion.div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item, index) => (
            <SidebarMenuItem key={item.label}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <SidebarMenuButton asChild isActive={isActive(item.href)}>
                  <Link to={item.href} className="flex items-center gap-2">
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </motion.div>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 flex justify-between items-center">
        <ThemeToggle />
        {collapsed && (
          <button 
            onClick={toggleSidebar} 
            className="p-2 rounded-md hover:bg-muted/50"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}


import { useState } from "react";
import { cn } from "@/lib/utils";
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
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { icon: Home, label: "Home", href: "#" },
    { icon: LayoutDashboard, label: "Dashboard", href: "#" },
    { icon: BarChart2, label: "Analytics", href: "#" },
    { icon: LineChart, label: "Reports", href: "#" },
    { icon: Users, label: "Users", href: "#" },
    { icon: Settings, label: "Settings", href: "#" },
  ];

  return (
    <Sidebar
      defaultCollapsed={collapsed}
      onCollapsedChange={setCollapsed}
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
                <SidebarMenuButton asChild>
                  <a href={item.href} className="flex items-center gap-2">
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </a>
                </SidebarMenuButton>
              </motion.div>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <ThemeToggle />
      </SidebarFooter>
    </Sidebar>
  );
}

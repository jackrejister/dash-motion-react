
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

const Settings = () => {
  useEffect(() => {
    document.title = "Insight Pulse | Settings";
  }, []);
  
  const { theme, toggleTheme } = useTheme();
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [mobileNotifications, setMobileNotifications] = useState(false);
  const [dataSharing, setDataSharing] = useState(true);
  
  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-3xl font-bold mb-1">Settings</h1>
          <p className="text-muted-foreground">Customize your dashboard experience</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div 
            className="md:col-span-1 rounded-lg border bg-card text-card-foreground shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Appearance</h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-base font-medium mb-2">Theme</h3>
                <div className="flex items-center space-x-4">
                  <div 
                    className={`flex items-center justify-center w-12 h-8 rounded-md cursor-pointer ${theme === 'light' ? 'ring-2 ring-primary' : ''}`}
                    style={{ backgroundColor: '#f8fafc' }}
                    onClick={() => {
                      if (theme !== 'light') toggleTheme();
                    }}
                  >
                    <span className="text-sm">Light</span>
                  </div>
                  <div 
                    className={`flex items-center justify-center w-12 h-8 rounded-md cursor-pointer ${theme === 'dark' ? 'ring-2 ring-primary' : ''}`}
                    style={{ backgroundColor: '#1e293b', color: 'white' }}
                    onClick={() => {
                      if (theme !== 'dark') toggleTheme();
                    }}
                  >
                    <span className="text-sm">Dark</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-base font-medium mb-2">Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {['#3b82f6', '#10b981', '#8b5cf6', '#ec4899', '#f97316'].map(color => (
                    <div 
                      key={color}
                      className="w-8 h-8 rounded-full cursor-pointer"
                      style={{ backgroundColor: color }}
                      onClick={() => {}}
                    />
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-base font-medium mb-2">Font Size</h3>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 border rounded-md hover:bg-muted/50">Small</button>
                  <button className="px-3 py-1 border rounded-md bg-primary text-primary-foreground">Medium</button>
                  <button className="px-3 py-1 border rounded-md hover:bg-muted/50">Large</button>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-1 rounded-lg border bg-card text-card-foreground shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Notifications</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-base font-medium">Email Notifications</h3>
                  <p className="text-sm text-muted-foreground">Receive updates via email</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={emailNotifications} 
                    onChange={() => setEmailNotifications(!emailNotifications)}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-base font-medium">Mobile Notifications</h3>
                  <p className="text-sm text-muted-foreground">Receive updates via mobile app</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox"
                    checked={mobileNotifications}
                    onChange={() => setMobileNotifications(!mobileNotifications)}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-base font-medium">Data Sharing</h3>
                  <p className="text-sm text-muted-foreground">Share anonymous usage data</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox"
                    checked={dataSharing}
                    onChange={() => setDataSharing(!dataSharing)}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                </label>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Account Settings</h2>
          </div>
          <div className="p-6">
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium mb-1">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border rounded-md" 
                    placeholder="First Name"
                    defaultValue="John" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border rounded-md" 
                    placeholder="Last Name" 
                    defaultValue="Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border rounded-md" 
                    placeholder="Email Address" 
                    defaultValue="john.doe@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-3 py-2 border rounded-md" 
                    placeholder="Phone Number" 
                    defaultValue="+1 (555) 123-4567"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input 
                  type="password" 
                  className="w-full px-3 py-2 border rounded-md" 
                  placeholder="••••••••" 
                />
              </div>
              
              <div className="flex gap-3 pt-2">
                <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground font-medium rounded-md">
                  Save Changes
                </button>
                <button type="button" className="px-4 py-2 border font-medium rounded-md">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;

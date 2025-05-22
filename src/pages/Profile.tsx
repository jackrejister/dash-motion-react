
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  useEffect(() => {
    document.title = "Insight Pulse | My Profile";
  }, []);

  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phoneNumber: "+1 (555) 123-4567",
    jobTitle: "Product Manager",
    department: "Product",
    location: "New York, USA",
    bio: "Experienced product manager with a passion for data-driven decision making and user-centered design."
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully.",
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-3xl font-bold mb-1">My Profile</h1>
          <p className="text-muted-foreground">Manage your personal information and account settings</p>
        </motion.div>

        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          
          <TabsContent value="personal" className="space-y-6">
            <motion.div 
              className="flex flex-col md:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="md:w-1/3 flex flex-col items-center gap-4 p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
                <Avatar className="h-32 w-32">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-4xl">JD</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h2 className="text-xl font-semibold">{formData.firstName} {formData.lastName}</h2>
                  <p className="text-muted-foreground">{formData.jobTitle}</p>
                  <p className="text-sm text-muted-foreground">{formData.email}</p>
                </div>
                <Button variant="outline" className="w-full">Upload New Photo</Button>
              </div>

              <div className="md:w-2/3 rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6 border-b flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Personal Information</h2>
                  <Button 
                    variant={isEditing ? "default" : "outline"}
                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                  >
                    {isEditing ? "Save Changes" : "Edit Profile"}
                  </Button>
                </div>
                <div className="p-6">
                  <form className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium mb-1">First Name</label>
                        <input 
                          type="text" 
                          name="firstName"
                          className="w-full px-3 py-2 border rounded-md bg-background" 
                          value={formData.firstName}
                          onChange={handleChange}
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Last Name</label>
                        <input 
                          type="text" 
                          name="lastName"
                          className="w-full px-3 py-2 border rounded-md bg-background" 
                          value={formData.lastName}
                          onChange={handleChange}
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Email Address</label>
                        <input 
                          type="email" 
                          name="email"
                          className="w-full px-3 py-2 border rounded-md bg-background" 
                          value={formData.email}
                          onChange={handleChange}
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phoneNumber"
                          className="w-full px-3 py-2 border rounded-md bg-background" 
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Job Title</label>
                        <input 
                          type="text" 
                          name="jobTitle"
                          className="w-full px-3 py-2 border rounded-md bg-background" 
                          value={formData.jobTitle}
                          onChange={handleChange}
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Department</label>
                        <input 
                          type="text" 
                          name="department"
                          className="w-full px-3 py-2 border rounded-md bg-background" 
                          value={formData.department}
                          onChange={handleChange}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Location</label>
                      <input 
                        type="text" 
                        name="location"
                        className="w-full px-3 py-2 border rounded-md bg-background" 
                        value={formData.location}
                        onChange={handleChange}
                        disabled={!isEditing}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Bio</label>
                      <textarea 
                        name="bio"
                        className="w-full px-3 py-2 border rounded-md resize-none h-24 bg-background" 
                        value={formData.bio}
                        onChange={handleChange}
                        disabled={!isEditing}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="security">
            <motion.div 
              className="rounded-lg border bg-card text-card-foreground shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold">Security Settings</h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Change Password</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Current Password</label>
                      <input 
                        type="password" 
                        className="w-full px-3 py-2 border rounded-md" 
                        placeholder="••••••••" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">New Password</label>
                      <input 
                        type="password" 
                        className="w-full px-3 py-2 border rounded-md" 
                        placeholder="••••••••" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Confirm New Password</label>
                      <input 
                        type="password" 
                        className="w-full px-3 py-2 border rounded-md" 
                        placeholder="••••••••" 
                      />
                    </div>
                    <Button>Update Password</Button>
                  </form>
                </div>
                
                <div className="pt-4 border-t">
                  <h3 className="text-lg font-medium mb-4">Two-Factor Authentication</h3>
                  <p className="text-muted-foreground mb-4">Add an extra layer of security to your account by enabling two-factor authentication.</p>
                  <Button variant="outline">Enable 2FA</Button>
                </div>
              </div>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="notifications">
            <motion.div 
              className="rounded-lg border bg-card text-card-foreground shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold">Notification Preferences</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Email Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between py-2">
                      <div>
                        <h4 className="text-base font-medium">Weekly Reports</h4>
                        <p className="text-sm text-muted-foreground">Receive weekly summary of your dashboard activity</p>
                      </div>
                      <div className="relative inline-flex items-center">
                        <input type="checkbox" id="weekly-reports" className="sr-only peer" defaultChecked />
                        <label htmlFor="weekly-reports" className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-primary after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full cursor-pointer"></label>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between py-2">
                      <div>
                        <h4 className="text-base font-medium">Account Updates</h4>
                        <p className="text-sm text-muted-foreground">Get notified about important account updates</p>
                      </div>
                      <div className="relative inline-flex items-center">
                        <input type="checkbox" id="account-updates" className="sr-only peer" defaultChecked />
                        <label htmlFor="account-updates" className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-primary after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full cursor-pointer"></label>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between py-2">
                      <div>
                        <h4 className="text-base font-medium">New Features</h4>
                        <p className="text-sm text-muted-foreground">Stay updated about new features and improvements</p>
                      </div>
                      <div className="relative inline-flex items-center">
                        <input type="checkbox" id="new-features" className="sr-only peer" />
                        <label htmlFor="new-features" className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-primary after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full cursor-pointer"></label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h3 className="text-lg font-medium mb-2">Push Notifications</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between py-2">
                        <div>
                          <h4 className="text-base font-medium">Real-time Alerts</h4>
                          <p className="text-sm text-muted-foreground">Get notified in real-time about important events</p>
                        </div>
                        <div className="relative inline-flex items-center">
                          <input type="checkbox" id="real-time-alerts" className="sr-only peer" defaultChecked />
                          <label htmlFor="real-time-alerts" className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-primary after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full cursor-pointer"></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button variant="outline">Save Preferences</Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Profile;

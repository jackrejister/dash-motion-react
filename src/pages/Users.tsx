
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { PieChart } from "@/components/charts/PieChart";
import { Search } from "lucide-react";

const Users = () => {
  useEffect(() => {
    document.title = "Insight Pulse | Users";
  }, []);
  
  const [searchQuery, setSearchQuery] = useState("");
  
  const users = [
    { id: 1, name: "Alex Johnson", email: "alex@example.com", role: "Admin", status: "Active", avatar: "" },
    { id: 2, name: "Sarah Williams", email: "sarah@example.com", role: "Editor", status: "Active", avatar: "" },
    { id: 3, name: "Michael Brown", email: "michael@example.com", role: "Viewer", status: "Inactive", avatar: "" },
    { id: 4, name: "Emily Davis", email: "emily@example.com", role: "Editor", status: "Active", avatar: "" },
    { id: 5, name: "Daniel Wilson", email: "daniel@example.com", role: "Viewer", status: "Active", avatar: "" },
    { id: 6, name: "Olivia Martinez", email: "olivia@example.com", role: "Admin", status: "Active", avatar: "" },
    { id: 7, name: "James Taylor", email: "james@example.com", role: "Viewer", status: "Inactive", avatar: "" },
    { id: 8, name: "Sophia Anderson", email: "sophia@example.com", role: "Editor", status: "Active", avatar: "" },
  ];
  
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const userRoleData = [
    { name: "Admin", value: 2 },
    { name: "Editor", value: 3 },
    { name: "Viewer", value: 3 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-3xl font-bold mb-1">Users</h1>
          <p className="text-muted-foreground">Manage system users and permissions</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          <motion.div 
            className="md:col-span-2 rounded-lg border bg-card text-card-foreground shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="p-6 border-b flex justify-between items-center">
              <h2 className="text-xl font-semibold">User List</h2>
              <div className="relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="pl-9 px-3 py-1 border rounded-md w-64 bg-background text-foreground"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left pb-3 pl-4">User</th>
                      <th className="text-left pb-3">Role</th>
                      <th className="text-left pb-3">Status</th>
                      <th className="text-right pb-3 pr-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {filteredUsers.map(user => (
                      <motion.tr 
                        key={user.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="hover:bg-muted/50"
                      >
                        <td className="py-3 pl-4">
                          <div className="flex items-center">
                            <Avatar className="h-8 w-8 mr-3">
                              <AvatarImage src={user.avatar} />
                              <AvatarFallback>
                                {user.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{user.name}</p>
                              <p className="text-sm text-muted-foreground">{user.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3">{user.role}</td>
                        <td className="py-3">
                          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            user.status === 'Active'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="py-3 text-right pr-4">
                          <button className="text-sm text-primary hover:underline mr-3">Edit</button>
                          <button className="text-sm text-destructive hover:underline">Delete</button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">User Roles</h2>
            </div>
            <div className="p-6">
              <PieChart
                title="Role Distribution"
                description="Users by role type"
                data={userRoleData}
                colors={["#3b82f6", "#8b5cf6", "#10b981"]}
              />
              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="h-3 w-3 bg-[#3b82f6] rounded-full mr-2"></div>
                    <span>Admin</span>
                  </div>
                  <span className="font-medium">2 users</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="h-3 w-3 bg-[#8b5cf6] rounded-full mr-2"></div>
                    <span>Editor</span>
                  </div>
                  <span className="font-medium">3 users</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="h-3 w-3 bg-[#10b981] rounded-full mr-2"></div>
                    <span>Viewer</span>
                  </div>
                  <span className="font-medium">3 users</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Users;

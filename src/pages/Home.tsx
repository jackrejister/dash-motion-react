
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Insight Pulse | Home";
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-3xl font-bold mb-1">Home</h1>
          <p className="text-muted-foreground">Welcome to Insight Pulse Analytics Dashboard</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div 
            className="rounded-lg border bg-card text-card-foreground shadow-sm p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Quick Overview</h2>
            <p className="text-muted-foreground">
              Get started by exploring our dashboard features. The sidebar navigation provides access to
              all the analytical tools you need to make data-driven decisions.
            </p>
          </motion.div>

          <motion.div 
            className="rounded-lg border bg-card text-card-foreground shadow-sm p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Recent Updates</h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>New analytics features added</li>
              <li>Enhanced reporting capabilities</li>
              <li>Improved user management system</li>
              <li>Dark/light theme toggle implementation</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;

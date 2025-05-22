
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { AreaChart } from "@/components/charts/AreaChart";
import { PieChart } from "@/components/charts/PieChart";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Analytics = () => {
  useEffect(() => {
    document.title = "Insight Pulse | Analytics";
  }, []);

  const trafficSourceData = [
    { name: "Organic Search", value: 4000 },
    { name: "Direct", value: 2000 },
    { name: "Referral", value: 2780 },
    { name: "Social Media", value: 1890 },
    { name: "Email", value: 2390 },
  ];

  const conversionData = [
    { name: "Jan", value: 1000 },
    { name: "Feb", value: 1200 },
    { name: "Mar", value: 900 },
    { name: "Apr", value: 1500 },
    { name: "May", value: 1700 },
    { name: "Jun", value: 1300 },
    { name: "Jul", value: 1600 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-3xl font-bold mb-1">Analytics</h1>
          <p className="text-muted-foreground">Dive deep into your data insights</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <AreaChart 
            title="Conversion Rate" 
            description="Monthly conversion trends"
            data={conversionData} 
            color="#10b981"
          />
          <PieChart
            title="Traffic Sources"
            description="Distribution of traffic by source"
            data={trafficSourceData}
            colors={["#3b82f6", "#8b5cf6", "#ec4899", "#f97316", "#10b981"]}
          />
        </div>

        <motion.div 
          className="rounded-lg border bg-card text-card-foreground shadow-sm p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Analytics Overview</h2>
          <p className="text-muted-foreground mb-4">
            Data insights show a 12% increase in user engagement compared to previous month.
            The highest traffic is coming from organic search, representing 36% of total visitors.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-md bg-primary/10 p-4">
              <h3 className="font-medium">Bounce Rate</h3>
              <p className="text-2xl font-bold">32.8%</p>
              <p className="text-xs text-muted-foreground">3.2% lower than last month</p>
            </div>
            <div className="rounded-md bg-primary/10 p-4">
              <h3 className="font-medium">Avg. Session</h3>
              <p className="text-2xl font-bold">4m 23s</p>
              <p className="text-xs text-muted-foreground">12s longer than last month</p>
            </div>
            <div className="rounded-md bg-primary/10 p-4">
              <h3 className="font-medium">Conversion Rate</h3>
              <p className="text-2xl font-bold">3.4%</p>
              <p className="text-xs text-muted-foreground">0.5% higher than last month</p>
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;

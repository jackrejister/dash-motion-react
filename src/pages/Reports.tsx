
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { BarChart } from "@/components/charts/BarChart";
import { LineChart } from "@/components/charts/LineChart";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Reports = () => {
  useEffect(() => {
    document.title = "Insight Pulse | Reports";
  }, []);
  
  const revenueData = [
    { name: "Jan", value: 5000 },
    { name: "Feb", value: 7000 },
    { name: "Mar", value: 4500 },
    { name: "Apr", value: 6500 },
    { name: "May", value: 8000 },
    { name: "Jun", value: 9500 },
  ];
  
  const performanceData = [
    { name: "Jan", users: 400, revenue: 2400, engagement: 1200 },
    { name: "Feb", users: 300, revenue: 1398, engagement: 1100 },
    { name: "Mar", users: 200, revenue: 9800, engagement: 900 },
    { name: "Apr", users: 278, revenue: 3908, engagement: 1300 },
    { name: "May", users: 189, revenue: 4800, engagement: 1400 },
    { name: "Jun", users: 239, revenue: 3800, engagement: 1200 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-3xl font-bold mb-1">Reports</h1>
          <p className="text-muted-foreground">View and analyze your performance reports</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <BarChart 
            title="Revenue Report" 
            description="Monthly revenue performance"
            data={revenueData}
            color="#8b5cf6" 
          />
          <LineChart
            title="Performance Metrics"
            description="Key metrics over the last 6 months"
            data={performanceData}
            lines={[
              { key: "users", color: "#3b82f6" },
              { key: "revenue", color: "#22c55e" },
              { key: "engagement", color: "#ec4899" },
            ]}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-1">
          <motion.div
            className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Quarterly Reports</h2>
              <p className="text-muted-foreground mb-4">
                Access and download detailed quarterly performance reports
              </p>
            </div>
            <div className="border-t">
              <div className="divide-y">
                {["Q1 2023", "Q2 2023", "Q3 2023", "Q4 2023"].map((quarter, i) => (
                  <div key={quarter} className="flex items-center justify-between p-4 hover:bg-muted/50">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <span className="font-medium">{i+1}</span>
                      </div>
                      <div>
                        <p className="font-medium">{quarter} Report</p>
                        <p className="text-sm text-muted-foreground">PDF • 2.4MB</p>
                      </div>
                    </div>
                    <button className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground">
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;

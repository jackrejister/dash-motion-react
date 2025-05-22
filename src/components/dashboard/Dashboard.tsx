
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AreaChart } from "@/components/charts/AreaChart";
import { BarChart } from "@/components/charts/BarChart";
import { LineChart } from "@/components/charts/LineChart";
import { PieChart } from "@/components/charts/PieChart";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { DataTable } from "@/components/dashboard/DataTable";
import { BarChart2, DollarSign, LayoutGrid, Users } from "lucide-react";

const mockLineChartData = [
  { name: "Jan", users: 400, revenue: 2400, engagement: 1200 },
  { name: "Feb", users: 300, revenue: 1398, engagement: 1100 },
  { name: "Mar", users: 200, revenue: 9800, engagement: 900 },
  { name: "Apr", users: 278, revenue: 3908, engagement: 1300 },
  { name: "May", users: 189, revenue: 4800, engagement: 1400 },
  { name: "Jun", users: 239, revenue: 3800, engagement: 1200 },
  { name: "Jul", users: 349, revenue: 4300, engagement: 1300 },
  { name: "Aug", users: 430, revenue: 4300, engagement: 1400 },
  { name: "Sep", users: 400, revenue: 4300, engagement: 1500 },
  { name: "Oct", users: 450, revenue: 4300, engagement: 1700 },
  { name: "Nov", users: 600, revenue: 4300, engagement: 1800 },
  { name: "Dec", users: 400, revenue: 4300, engagement: 1200 },
];

const mockAreaChartData = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 2000 },
  { name: "Apr", value: 2780 },
  { name: "May", value: 1890 },
  { name: "Jun", value: 2390 },
  { name: "Jul", value: 3490 },
];

const mockBarChartData = [
  { name: "Product A", value: 4000 },
  { name: "Product B", value: 3000 },
  { name: "Product C", value: 2000 },
  { name: "Product D", value: 2780 },
  { name: "Product E", value: 1890 },
  { name: "Product F", value: 2390 },
];

const mockPieChartData = [
  { name: "Mobile", value: 400 },
  { name: "Desktop", value: 300 },
  { name: "Tablet", value: 200 },
  { name: "Other", value: 100 },
];

const mockTableData = [
  {
    id: 1,
    customer: "John Smith",
    email: "john@example.com",
    amount: 350,
    status: "Completed",
    date: "2023-04-23",
  },
  {
    id: 2,
    customer: "Sarah Johnson",
    email: "sarah@example.com",
    amount: 450,
    status: "Processing",
    date: "2023-04-22",
  },
  {
    id: 3,
    customer: "Michael Brown",
    email: "michael@example.com",
    amount: 700,
    status: "Completed",
    date: "2023-04-21",
  },
  {
    id: 4,
    customer: "Emma Wilson",
    email: "emma@example.com",
    amount: 550,
    status: "Failed",
    date: "2023-04-20",
  },
  {
    id: 5,
    customer: "James Taylor",
    email: "james@example.com",
    amount: 250,
    status: "Completed",
    date: "2023-04-19",
  },
  {
    id: 6,
    customer: "Olivia Davis",
    email: "olivia@example.com",
    amount: 890,
    status: "Processing",
    date: "2023-04-18",
  },
];

export function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-pulse text-primary">Loading dashboard...</div>
      </div>
    );
  }

  const tableColumns = [
    { header: "ID", accessor: "id" },
    { header: "Customer", accessor: "customer" },
    { header: "Email", accessor: "email" },
    {
      header: "Amount",
      accessor: "amount",
      cell: (item: any) => `$${item.amount.toFixed(2)}`,
    },
    {
      header: "Status",
      accessor: "status",
      cell: (item: any) => (
        <div
          className={`px-2 py-1 rounded-full text-xs inline-block ${
            item.status === "Completed"
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
              : item.status === "Processing"
              ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
              : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
          }`}
        >
          {item.status}
        </div>
      ),
    },
    { header: "Date", accessor: "date" },
  ];

  return (
    <div className="space-y-6 p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold mb-1">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome back! Here's a summary of your analytics.</p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Users"
          value="34,218"
          icon={Users}
          trend={{ value: 12.5, isPositive: true, label: "from last month" }}
          delay={0}
        />
        <StatsCard
          title="Revenue"
          value="$45,241"
          icon={DollarSign}
          trend={{ value: 8.2, isPositive: true, label: "from last month" }}
          delay={1}
        />
        <StatsCard
          title="Active Sessions"
          value="1,432"
          icon={LayoutGrid}
          trend={{ value: 3.1, isPositive: false, label: "from last month" }}
          delay={2}
        />
        <StatsCard
          title="Conversion Rate"
          value="2.4%"
          icon={BarChart2}
          trend={{ value: 0.8, isPositive: true, label: "from last month" }}
          delay={3}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <AreaChart 
          title="User Growth" 
          description="Monthly active users over time"
          data={mockAreaChartData} 
          color="#3b82f6"
        />
        <BarChart 
          title="Product Sales" 
          description="Revenue by product category"
          data={mockBarChartData}
          color="#8b5cf6" 
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <LineChart
          title="Performance Metrics"
          description="Key metrics over the last 12 months"
          data={mockLineChartData}
          lines={[
            { key: "users", color: "#3b82f6" },
            { key: "revenue", color: "#22c55e" },
            { key: "engagement", color: "#ec4899" },
          ]}
        />
        <PieChart
          title="Device Distribution"
          description="User sessions by device type"
          data={mockPieChartData}
          colors={["#3b82f6", "#8b5cf6", "#ec4899", "#f97316"]}
        />
      </div>

      <DataTable
        title="Recent Transactions"
        description="Latest customer transactions"
        data={mockTableData}
        columns={tableColumns}
      />
    </div>
  );
}

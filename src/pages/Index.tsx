
import { Dashboard } from "@/components/dashboard/Dashboard";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update the document title
    document.title = "Insight Pulse | Analytics Dashboard";
  }, []);

  return (
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
  );
};

export default Index;

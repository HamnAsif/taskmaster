import { ReactNode } from "react";
import Sidebar from "../../../components/Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 p-6 ml-64 overflow-y-auto">{children}</main>
    </div>
  );
}



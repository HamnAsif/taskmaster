"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import Sidebar from "../../../components/Sidebar";
import Footer from "../../../components/Footer";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SessionProvider>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1 ml-64 flex flex-col">
          <main className="flex-1 p-6 overflow-y-auto">{children}</main>
          <Footer />
        </div>
      </div>
    </SessionProvider>
  );
}

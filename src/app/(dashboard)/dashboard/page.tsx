"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";

export default function DashboardPage() {
    const { data: session } = useSession();
    const username = session?.user?.name || "Guest";
  return (
    <div className="flex flex-row justify-between px-10 py-2 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-lg text-3xl font-bold"
      >
        Welcome {username}!
      </motion.div>

      <Link
        href="/dashboard/new-task"
        className="px-4 py-2 bg-white rounded border border-gray-300 hover:border-gray-500 transition"
      >
        New Task
      </Link>
    </div>
  );
}

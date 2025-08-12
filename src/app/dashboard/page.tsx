"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex">
      <div className="w-64 h-screen bg-white flex flex-col border-r border-gray-200">
        <div className="flex flex-row space-x-2 border-b border-gray-200 pl-6 pt-2">
            <div>         
                <Image src="/logo.jpg" alt="Hero section" width={40} height={40} className="rounded-lg"/>
            </div>
            <h1 className="p-2 text-2xl font-bold">TaskMaster</h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <a
            href="/dashboard"
            className="block px-4 py-2 rounded hover:bg-blue-100 flex items-center space-x-2"
          >
            <span>         
                <Image src="/dashboard.png" alt="Dashboard Icon" width={20} height={20} className="rounded-lg"/>
            </span>
            <span>Dashboard</span>
          </a>

          <a
            href="/profile"
            className="block px-4 py-2 rounded hover:bg-blue-100 flex items-center space-x-2"
          >
            <span>         
                <Image src="/profile.png" alt="Profile Icon" width={20} height={20} className="rounded-lg"/>
            </span>
            <span>Profile</span>
          </a>

          <a
            href="/settings"
            className="block px-4 py-2 rounded hover:bg-blue-100 flex items-center space-x-2"
          >
            <span>         
                <Image src="/setting.png" alt="Stting Icon" width={20} height={20} className="rounded-lg"/>
            </span>
            <span>Settings</span>
          </a>
        </nav>
        <div className="flex items-center justify-center">
            <div className="p-4">
            <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="py-2 px-4 rounded flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 transition"
            >
                <span>         
                    <Image src="/logout.png" alt="Logout Icon" width={20} height={20} className="rounded-lg"/>
                </span>
                <span className="text-white text-lg">Logout</span>
            </button>
            </div>
        </div>
      </div>

      <div className="flex-1 p-6">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-bold">WELCOME!</h1>
          <Link href="/new-task" className="px-4 py-2 bg-white rounded border-2 border-gray-300 hover:border-2 hover:border-gray-500 transition">
                  New Task
          </Link>
        </div>
      </div>
    </div>
  );
}

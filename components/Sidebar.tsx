"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white flex flex-col border-r border-gray-200 fixed top-0 left-0">
      <div className="flex flex-row space-x-2 border-b border-gray-200 pl-6 pt-2">
        <Image src="/logo.jpg" alt="Hero section" width={40} height={40} className="rounded-lg" />
        <h1 className="p-2 text-2xl font-bold">TaskMaster</h1>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <Link href="/dashboard" className="block px-4 py-2 rounded hover:bg-blue-100 flex items-center space-x-2">
          <Image src="/dashboard.png" alt="Dashboard Icon" width={20} height={20} />
          <span>Dashboard</span>
        </Link>
        <Link href="/profile" className="block px-4 py-2 rounded hover:bg-blue-100 flex items-center space-x-2">
          <Image src="/profile.png" alt="Profile Icon" width={20} height={20} />
          <span>Profile</span>
        </Link>
        <Link href="/settings" className="block px-4 py-2 rounded hover:bg-blue-100 flex items-center space-x-2">
          <Image src="/setting.png" alt="Settings Icon" width={20} height={20} />
          <span>Settings</span>
        </Link>
      </nav>

      <div className="flex items-center justify-center p-4">
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="py-2 px-4 rounded flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 transition"
        >
          <Image src="/logout.png" alt="Logout Icon" width={20} height={20} />
          <span className="text-white text-lg">Logout</span>
        </button>
      </div>
    </div>
  );
}

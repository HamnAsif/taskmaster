import Image from "next/image";
import React from "react";
import Link from "next/link";
export default function LandingLayout({children}: {children:React.ReactNode})
{
    return(
        <div>
        <nav id ="home" className="flex flex-row justify-between items-center p-3 shadow">
                <div className="flex flex-row justify-start items-center space-x-4">
                    <div>         
                        <Image src="/logo.jpg" alt="Hero section" width={50} height={50} className="rounded-lg"/>
                    </div>
                    <h1 className="text-xl font-bold text-gray-800">TaskMaster</h1>
                </div>
                <div className="flex flex-row justify-end items-center space-x-8">
                    <Link href="/#home" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
                    <Link href="/#features" className="text-gray-700 hover:text-blue-600 transition">Features</Link>
                    <Link href="/#support" className="text-gray-700 hover:text-blue-600 transition">Support</Link>
                    <Link href="/register" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                        Get Started
                    </Link>
                </div>
        </nav>
        <main>
            {children}
        </main>
    </div>
    );
}
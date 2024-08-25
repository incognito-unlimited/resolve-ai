"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { BellIcon, TwitterIcon, FacebookIcon, InstagramIcon } from 'lucide-react';
import {
  IconArrowLeft,
  IconBrandTabler,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useClerk } from "@clerk/nextjs"; // Import useClerk

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { signOut } = useClerk(); // Destructure signOut from useClerk
  
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      action: signOut, // Add action for logout
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar open={isSidebarOpen} setOpen={setIsSidebarOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {isSidebarOpen ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} onClick={link.action} /> // Pass onClick to SidebarLink
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Caleb",
                href: "#",
                icon: (
                  <Image
                    src="/logo.png" // Replace with actual image path
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                <span className="sr-only">Notifications</span>
                <BellIcon className="h-6 w-6" />
                <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
              </button>
              <img className="h-8 w-8 rounded-full" src="/placeholder.svg?height=32&width=32" alt="User" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <DashboardContent />
      </main>
    </div>
  );
}

// Logo components
export const Logo = () => (
  <Link href="#" className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
    <Image
      src="/logo.png" // Replace with actual image path
      className="h-7 w-7 flex-shrink-0 rounded-full"
      width={50}
      height={50}
      alt="Avatar"
    />
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-medium text-black dark:text-white whitespace-pre">
      Resolve.AI
    </motion.span>
  </Link>
);

export const LogoIcon = () => (
  <Link href="#" className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
    <Image
      src="/logo.png" // Replace with actual image path
      className="h-7 w-7 flex-shrink-0 rounded-full"
      width={50}
      height={50}
      alt="Avatar"
    />
  </Link>
);

// DashboardContent Component (Placeholder for actual content)
const DashboardContent = () => (
  <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {[
        { title: "Total Users", value: "10,483", change: "+12.3%" },
        { title: "Avg. Response Time", value: "2.4 hrs", change: "-8.1%" },
        { title: "Satisfaction Rate", value: "98.3%", change: "+6.7%" },
        { title: "Pending Tickets", value: "23", change: "-2.3%" },
      ].map((stat, index) => (
        <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-500 truncate">{stat.title}</div>
                <div className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</div>
              </div>
              <div className={`${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Main Cards */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Grievance Submission Card */}
      <div className="bg-gradient-to-br from-indigo-500 to-blue-600 overflow-hidden rounded-xl shadow-lg">
        <div className="p-6 text-white">
          <h2 className="text-2xl font-semibold mb-2">Grievance Submission</h2>
          <p className="mb-4 opacity-90">Submit and track your grievances efficiently.</p>
          <Link href="/ticket">
            <button className="bg-white text-indigo-600 px-6 py-2 rounded-md hover:bg-indigo-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
              Submit Grievance
            </button>
          </Link>
        </div>
      </div>

      {/* User Support Card */}
      <div className="bg-white overflow-hidden rounded-xl shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">User Support</h2>
          <p className="text-gray-600 mb-4">Get help and support for any issues you encounter.</p>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Contact Support
          </button>
        </div>
      </div>
    </div>

    {/* Social Slider */}
    <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Connect With Us</h2>
      <div className="flex space-x-6">
        {/* Social Icons (Update these with actual links) */}
        <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors duration-200">
          <TwitterIcon className="h-6 w-6" />
        </a>
        <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors duration-200">
          <FacebookIcon className="h-6 w-6" />
        </a>
        <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors duration-200">
          <InstagramIcon className="h-6 w-6" />
        </a>
      </div>
    </div>
  </div>
);

"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { BellIcon, TwitterIcon, FacebookIcon, InstagramIcon } from 'lucide-react';
import { IconArrowLeft, IconBrandTabler } from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useAuth } from "@clerk/nextjs";  // Import Clerk's useAuth hook

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { signOut } = useAuth();  // Destructure signOut from useAuth

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
      onClick: () => signOut(),  // Use the signOut function on click
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
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
                <SidebarLink key={idx} link={link} />
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

// Updated DashboardContent Component with the Form
const DashboardContent = () => (
  <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    {/* Grievance Submission Form */}
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Grievance Submission</h2>
      <form className="space-y-4">
        <div>
          <Label htmlFor="issueType">Issue Type</Label>
          <Select>
            <SelectTrigger id="issueType">
              <SelectValue placeholder="Select an issue type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technical">Technical Issue</SelectItem>
              <SelectItem value="billing">Billing Problem</SelectItem>
              <SelectItem value="service">Service Complaint</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" placeholder="Describe your issue in detail" />
        </div>
        <div>
          <Label htmlFor="attachment">Attachment (optional)</Label>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
              </svg>
            </Button>
            <span>Upload</span>
          </div>
        </div>
        <Button className="w-full">Submit Grievance</Button>
      </form>
    </div>

    {/* Additional Content */}
    {/* You can add more content here as needed */}
  </div>
);

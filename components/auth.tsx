'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';

export default function Buttons() {
  const { userId } = useAuth();

  return (
    <div className="flex items-center gap-2 max-sm:flex-col max-sm:w-[60%] max-sm:mt-8">
      {userId ? (
        <Link href="/dashboard">
          <button
            className="max-sm:w-full bg-blue-600 hover:bg-blue-700 p-[8px] px-6 text-sm text-white rounded-md"
          >
            Access To The App
          </button>
        </Link>
      ) : (
        <div className="flex gap-2 max-sm:flex-col max-sm:w-full">
          <Link href='/sign-in'>
            <button
              className="max-sm:w-full bg-blue-600 hover:bg-blue-700 p-[8px] px-6 text-sm text-white rounded-md"
            >
              Sign In
            </button>
          </Link>
          <Link href='/sign-up'>
            <button
              className="max-sm:w-full border border-blue-700 p-[8px] px-6 text-sm text-blue-700 hover:bg-blue-700 hover:text-white rounded-md"
            >
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

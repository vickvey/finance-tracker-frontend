'use client';

import { useState } from 'react';
import Sidebar from '@/components/sidebar';

type DashboardLayoutProps = {
  children: React.ReactElement;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className='flex'>
      {/* SIDEBAR */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* MAIN CONTENT */}
      <main className='w-full bg-[#f8f8f8] text-black/80'>
        <header className='bg-[#ffffff] h-20 border-b-[1px] border-black/20 shadow-2xs'></header>
        {children}
        <footer></footer>
      </main>
    </div>
  );
}

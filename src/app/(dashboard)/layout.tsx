'use client';

import { useState } from 'react';
import Sidebar from '@/components/sidebar';
import { BellIcon, ChevronDown, Search } from 'lucide-react';

type DashboardLayoutProps = {
  children: React.ReactElement;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className='flex'>
      {/* SIDEBAR */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        key={0}
      />

      {/* MAIN CONTENT */}
      <main className='w-full bg-[#f8f8f8] text-black/80'>
        <header className='bg-[#ffffff] flex justify-between items-center h-18 border-b-[1px] py-3 px-8 border-black/10 shadow-2xs'>
          <div className='flex flex-col'>
            <h1>Dashboard</h1>
            <p className='text-sm text-black/60'>
              Financial report for{' '}
              <span className='font-bold'>Feb 01, 2024 - Feb 28, 2024</span>
            </p>
          </div>

          <div className='flex items-center gap-4'>
            <div className='flex gap-2 border-r-[1px] border-black/10 px-2'>
              <div className='cursor-pointer text-black/60 hover:text-black transition-all duration-100'>
                <Search />
              </div>
              <div className='cursor-pointer text-black/60 hover:text-black transition-all duration-100'>
                <BellIcon />
              </div>
            </div>

            {/* PROFILE ICON AND DROP DOWN BUTTON */}
            <div className='flex items-center'>
              <div className='h-10 w-10 rounded-full bg-gray-400'></div>
              <div className='text-black/60 hover:text-black cursor-pointer flex items-center gap-1'>
                <ChevronDown />
              </div>
            </div>
          </div>
        </header>
        {children}
        <footer></footer>
      </main>
    </div>
  );
}

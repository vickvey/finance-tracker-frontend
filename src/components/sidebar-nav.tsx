import { useState } from 'react';
import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactElement;
}

type SidebarNavProps = {
  sidebarOpen: boolean;
  navItems: NavItem[];
};

export default function SidebarNav({ sidebarOpen, navItems }: SidebarNavProps) {
  const [activeNavItem, setActiveNavItem] = useState(navItems[0].label);

  return (
    <section className='px-3 pt-5'>
      <h1
        className={`text-xs text-white/60 ${sidebarOpen ? 'block' : 'hidden'}`}
      >
        MAIN MENU
      </h1>
      <nav className='py-2 px-1'>
        <ul className='flex flex-col gap-1'>
          {navItems.map((item) => (
            // NAV ITEM
            <Link
              href={item.href}
              key={item.label}
              className={`flex items-center gap-2 rounded-lg p-2 hover:text-white hover:bg-white/15 transition-all duration-100 ${
                activeNavItem === item.label
                  ? 'bg-white/15 text-white'
                  : 'text-white/75'
              }`}
              onClick={() => {
                setActiveNavItem(item.label);
              }}
            >
              <div className='h-4 w-4 flex items-center'>{item.icon}</div>
              <h2
                className={`font-light text-sm ${
                  sidebarOpen ? 'block' : 'hidden'
                }`}
              >
                {item.label}
              </h2>
            </Link>
          ))}
        </ul>
      </nav>
    </section>
  );
}

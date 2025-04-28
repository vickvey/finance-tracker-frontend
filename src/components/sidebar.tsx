import {
  ArrowDownUp,
  ArrowLeftRight,
  Banknote,
  ChevronsLeftRight,
  Coins,
  CreditCard,
  HandCoins,
  HelpCircle,
  LayoutDashboard,
  PiggyBank,
  Settings,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const mainMenuItems = [
  { label: 'Dashboard', href: '/user', icon: <LayoutDashboard /> },
  { label: 'Cards', href: '#', icon: <CreditCard /> },
  { label: 'Transactions', href: '#', icon: <ArrowLeftRight /> },
  { label: 'Cash Flow', href: '#', icon: <Banknote /> },
  { label: 'Budget', href: '#', icon: <HandCoins /> },
  { label: 'Goals', href: '#', icon: <PiggyBank /> },
];

const investmentsMenuItems = [
  { label: 'Investments', href: '#', icon: <Coins /> },
  { label: 'Exchanges', href: '#', icon: <ArrowDownUp /> },
];

const footerItems = [
  { label: 'Settings', href: '#settings', icon: <Settings /> },
  { label: 'Help & Support', href: '#help-and-support', icon: <HelpCircle /> },
];

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const [activeNavItem, setActiveNavItem] = useState<string>(
    mainMenuItems[0].label,
  );

  return (
    <aside
      className={`sticky top-0 bg-[#06140f] flex flex-col h-screen ${
        sidebarOpen ? 'w-64' : 'w-24'
      } transition-all duration-200`}
    >
      {/* LOGO, NAME AND SIDEBAR TOGGLE */}
      <header className='flex items-center justify-between min-h-18 border-b-[1px] border-white/20 px-4'>
        {/* LOGO AND NAME */}
        <div className='flex items-center gap-2'>
          <div className='h-8 w-8 bg-white/80 rounded-md'></div>
          <h1
            className={`font-serif text-lg font-bold ${
              sidebarOpen ? 'block' : 'hidden'
            }`}
          >
            FinTrack
          </h1>
        </div>
        {/* SIDEBAR TOGGLE */}
        <div>
          <ChevronsLeftRight
            onClick={() => {
              setSidebarOpen((prev) => !prev);
            }}
            className='hover:cursor-pointer text-white/60 hover:text-white transition-all duration-200'
          />
        </div>
      </header>

      {/* NAV BARS */}
      <section className='flex flex-col'>
        {/* MAIN MENU NAVBAR */}
        <section className='px-3 pt-5'>
          <h1
            className={`text-xs text-white/60 ${
              sidebarOpen ? 'block' : 'hidden'
            }`}
          >
            MAIN MENU
          </h1>
          <nav className='py-2 px-1'>
            <ul
              className={`flex flex-col gap-1 ${
                sidebarOpen ? '' : 'items-center'
              }`}
            >
              {mainMenuItems.map((item) => (
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
                  <div
                    className={`${
                      sidebarOpen ? 'h-4 w-4 ' : 'h-6 w-6'
                    } flex items-center`}
                  >
                    {item.icon}
                  </div>
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

        {/* INVESTMENTS NAVBAR */}
        <section className='px-3 pt-5'>
          <h1
            className={`text-xs text-white/60 ${
              sidebarOpen ? 'block' : 'hidden'
            }`}
          >
            INVESTMENTS
          </h1>
          <nav className='py-2 px-1'>
            <ul
              className={`flex flex-col gap-1 ${
                sidebarOpen ? '' : 'items-center'
              }`}
            >
              {investmentsMenuItems.map((item) => (
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
                  <div
                    className={`${
                      sidebarOpen ? 'h-4 w-4 ' : 'h-6 w-6'
                    } flex items-center`}
                  >
                    {item.icon}
                  </div>
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
      </section>

      {/* FOOTER */}
      <footer className='h-full'>
        <ul
          className={`h-full flex flex-col px-3 pb-4 justify-end gap-1 ${
            sidebarOpen ? '' : 'items-center'
          }`}
        >
          {footerItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className='flex items-center gap-2 py-2 px-1 text-white/60 hover:text-white hover:cursor-pointer transition-all duration-100'
              >
                <div className='h-6 w-6 flex items-center'>{item.icon}</div>
                <h2
                  className={`font-light text-sm ${
                    sidebarOpen ? 'block' : 'hidden'
                  }`}
                >
                  {item.label}
                </h2>
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    </aside>
  );
}

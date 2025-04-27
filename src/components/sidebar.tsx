import {
  ArrowLeftRight,
  Banknote,
  ChevronsLeftRight,
  Coins,
  CreditCard,
  LayoutDashboard,
  PiggyBank,
} from 'lucide-react';
import SidebarNav from './sidebar-nav';

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const mainMenuNavItems = [
  { label: 'Dashboard', href: '/user', icon: <LayoutDashboard /> },
  { label: 'Cards', href: '#', icon: <CreditCard /> },
  { label: 'Transactions', href: '#', icon: <ArrowLeftRight /> },
  { label: 'Cash Flow', href: '#', icon: <Banknote /> },
  { label: 'Budget', href: '#', icon: <Coins /> },
  { label: 'Goals', href: '#', icon: <PiggyBank /> },
];

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  return (
    <aside
      className={`bg-[#06140f] flex flex-col h-screen ${
        sidebarOpen ? 'w-64' : 'w-24'
      } transition-all duration-200`}
    >
      {/* LOGO, NAME AND SIDEBAR TOGGLE */}
      <header className='flex items-center justify-between h-20 border-b-[1px] border-white/20 px-4'>
        {/* LOGO AND NAME */}
        <div className='flex items-center gap-2'>
          <div className='h-8 w-8 bg-white/80 rounded-md'></div>
          <h1
            className={`font-serif text-lg font-bold ${
              sidebarOpen ? 'block' : 'hidden'
            }`}
          >
            Weavy
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

      <section className='flex flex-col bg-green-950/80'>
        {/* MAIN MENU NAVBAR */}
        <SidebarNav
          sidebarOpen={sidebarOpen}
          navItems={mainMenuNavItems}
          key={0}
        />

        {/* INVESTMENTS NAVBAR */}
      </section>

      {/* FOOTER */}
      <footer></footer>
    </aside>
  );
}

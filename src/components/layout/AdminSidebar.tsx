'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { adminMenu } from '@/data/adminMenu';

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col bg-slate-900 text-white">
      {/* Logo */}
      <div className="border-b border-slate-700 p-6">
        <h1 className="text-3xl font-bold">SIGAP KGB</h1>
        <p className="mt-1 text-sm text-slate-400">Sistem Informasi Gaji Berkala</p>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4">
        <div className="mb-3 text-xs tracking-wider text-slate-500 uppercase">Menu</div>

        <div className="space-y-2">
          {adminMenu.map((menu) => {
            const Icon = menu.icon;
            const active = pathname === menu.href;

            return (
              <Link
                key={menu.href}
                href={menu.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  active
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon size={20} />
                <span>{menu.title}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-700 p-4">
        <div className="text-sm font-semibold">Administrator</div>
        <div className="text-xs text-slate-400">Dinas Kominfo Kota Makassar</div>
      </div>
    </aside>
  );
}

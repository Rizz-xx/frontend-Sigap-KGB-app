import { ReactNode } from 'react';
import Sidebar from './sidebar';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  );
}

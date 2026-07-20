import { ReactNode } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminNavbar from './AdminNavbar';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <AdminSidebar />

      <div className="flex flex-1 flex-col">
        <AdminNavbar />

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}

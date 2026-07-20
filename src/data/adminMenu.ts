import { LayoutDashboard, Users, BadgeDollarSign, FileText, Settings } from 'lucide-react';

export const adminMenu = [
  {
    title: 'Dashboard',
    href: '/admin/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Data Pegawai',
    href: '/admin/employees',
    icon: Users,
  },
  {
    title: 'KGB',
    href: '/admin/kgb',
    icon: BadgeDollarSign,
  },
  {
    title: 'Laporan',
    href: '/admin/reports',
    icon: FileText,
  },
  {
    title: 'Pengaturan',
    href: '/admin/settings',
    icon: Settings,
  },
];

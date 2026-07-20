import DashboardLayout from '@/components/layout/DashboardLayout';
import HeroBanner from '@/components/dashboard/HeroBanner';
import StatsCard from '@/components/dashboard/StatsCard';
import SearchBar from '@/components/dashboard/SearchBar';
import EmployeeTable from '@/components/employee/EmployeeTable';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <HeroBanner />
      <StatsCard />
      <SearchBar />
      <EmployeeTable />
    </DashboardLayout>
  );
}

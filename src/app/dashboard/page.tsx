import DashboardLayout from '@/components/dashboard/dashboardlayout';
import HeroBanner from '@/components/dashboard/herobanner';
import StatsCard from '@/components/dashboard/statscard';
import SearchBar from '@/components/dashboard/searchbar';
import EmployeeTable from '@/components/dashboard/employeetable';

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

import WelcomeCard from '@/components/admin/WelcomeCard';
import SummaryCard from '@/components/admin/SummaryCard';

export default function AdminDashboardPage() {
  return (
    <div>
      <WelcomeCard />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <SummaryCard title="Total Pegawai" value="245" />

        <SummaryCard title="Segera KGB" value="15" />

        <SummaryCard title="Kenaikan Pangkat" value="8" />

        <SummaryCard title="User Aktif" value="4" />
      </div>
    </div>
  );
}

import { Users, Circle, Clock3 } from 'lucide-react';

const stats = [
  {
    id: 1,
    title: 'TOTAL PEGAWAI',
    value: 41,
    icon: Users,
    color: 'bg-blue-100 text-blue-700',
  },
  {
    id: 2,
    title: 'SEGERA KGB',
    value: 0,
    icon: Circle,
    color: 'bg-red-100 text-red-600',
  },
  {
    id: 3,
    title: 'DALAM 3 BULAN',
    value: 5,
    icon: Clock3,
    color: 'bg-yellow-100 text-yellow-600',
  },
];

export default function StatsCard() {
  return (
    <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.id} className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className={`rounded-xl p-4 ${item.color}`}>
                <Icon size={24} />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-500">{item.title}</p>

                <h2 className="text-4xl font-bold text-slate-800">{item.value}</h2>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

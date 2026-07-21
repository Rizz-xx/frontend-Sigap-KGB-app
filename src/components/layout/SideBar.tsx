import { Menu, LayoutDashboard, ArrowUpCircle, UserRound } from 'lucide-react';

const menus = [
  {
    id: 1,
    title: 'KGB',
    icon: LayoutDashboard,
    active: true,
  },
  {
    id: 2,
    title: 'Kenaikan Pangkat',
    icon: ArrowUpCircle,
    active: false,
  },
  {
    id: 3,
    title: 'Pensiun',
    icon: UserRound,
    active: false,
  },
];

export default function Sidebar() {
  return (
    <aside className="flex w-72 flex-col bg-[#142B63] text-white shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
            <span className="text-2xl font-bold text-[#142B63]">SIM</span>
          </div>

          <div>
            <h2 className="text-lg font-semibold">SIM</h2>

            <p className="text-xs text-blue-200">Sistem Informasi Manajemen</p>
          </div>
        </div>

        <button className="rounded-lg p-2 transition hover:bg-white/10">
          <Menu size={22} />
        </button>
      </div>

      {/* Menu */}

      <div className="flex-1 px-5 py-8">
        <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-blue-200 uppercase">Menu</p>

        <div className="space-y-3">
          {menus.map((menu) => {
            const Icon = menu.icon;

            return (
              <button
                key={menu.id}
                className={`flex w-full items-center gap-4 rounded-xl px-5 py-4 text-left font-medium transition-all duration-200 ${
                  menu.active ? 'bg-[#2E6CF6] shadow-md' : 'hover:bg-white/10'
                }`}
              >
                <Icon size={22} />

                <span>{menu.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

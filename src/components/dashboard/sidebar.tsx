import { Menu } from 'lucide-react';

const menus = [
  {
    id: 1,
    title: 'KGB',
    active: true,
  },
  {
    id: 2,
    title: 'Kenaikan Pangkat',
    active: false,
  },
  {
    id: 3,
    title: 'Pensiun',
    active: false,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <div>
          <h1 className="text-3xl font-bold">SIM</h1>
          <p className="text-sm text-slate-400">Sistem Informasi Manajemen</p>
        </div>

        <button>
          <Menu size={24} />
        </button>
      </div>

      {/* Menu */}
      <div className="px-6">
        <p className="mb-3 text-xs tracking-widest text-slate-500 uppercase">Menu</p>

        <div className="space-y-3">
          {menus.map((menu) => (
            <button
              key={menu.id}
              className={`w-full rounded-xl px-4 py-3 text-left transition ${
                menu.active ? 'bg-blue-600' : 'hover:bg-slate-800'
              }`}
            >
              {menu.title}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

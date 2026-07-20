import { Search, Plus } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      {/* Search */}
      <div className="relative w-full lg:max-w-md">
        <Search className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400" size={20} />

        <input
          type="text"
          placeholder="Cari nama atau NIP pegawai..."
          className="w-full rounded-xl border border-slate-300 py-3 pr-4 pl-12 transition outline-none focus:border-blue-500"
        />
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-3">
        <select className="rounded-xl border border-slate-300 px-4 py-3">
          <option>Status</option>
          <option>Aktif</option>
          <option>Pensiun</option>
        </select>

        <select className="rounded-xl border border-slate-300 px-4 py-3">
          <option>Unit Kerja</option>
        </select>

        <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700">
          <Search size={20} />
          Cari pegawai
        </button>
      </div>
    </div>
  );
}

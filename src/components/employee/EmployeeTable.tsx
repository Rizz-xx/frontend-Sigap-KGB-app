import { Eye, Pencil } from 'lucide-react';

const employees = [
  {
    id: 1,
    nama: 'Muhammad Arif',
    nip: '198902102010011001',
    golongan: 'III/a',
    jabatan: 'Analis Sistem',
    tmt: '12 Januari 2026',
    status: 'Aktif',
  },
  {
    id: 2,
    nama: 'Siti Aminah',
    nip: '198805182009022001',
    golongan: 'III/b',
    jabatan: 'Programmer',
    tmt: '21 Februari 2026',
    status: 'Aktif',
  },
  {
    id: 3,
    nama: 'Ahmad Rizal',
    nip: '197812122005011002',
    golongan: 'IV/a',
    jabatan: 'Kepala Bidang',
    tmt: '08 Maret 2026',
    status: 'Segera KGB',
  },
];

export default function EmployeeTable() {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="border-b p-6">
        <h2 className="text-xl font-semibold">Data Pegawai</h2>
      </div>

      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-4 text-left">Nama</th>

            <th className="p-4 text-left">NIP</th>

            <th className="p-4 text-left">Golongan</th>

            <th className="p-4 text-left">Jabatan</th>

            <th className="p-4 text-left">TMT KGB</th>

            <th className="p-4 text-left">Status</th>

            <th className="p-4 text-center">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((pegawai) => (
            <tr key={pegawai.id} className="border-b hover:bg-slate-50">
              <td className="p-4 font-medium">{pegawai.nama}</td>

              <td className="p-4">{pegawai.nip}</td>

              <td className="p-4">{pegawai.golongan}</td>

              <td className="p-4">{pegawai.jabatan}</td>

              <td className="p-4">{pegawai.tmt}</td>

              <td className="p-4">
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                  {pegawai.status}
                </span>
              </td>

              <td className="p-4">
                <div className="flex justify-center gap-2">
                  <button className="rounded-lg bg-blue-100 p-2 text-blue-600 hover:bg-blue-200">
                    <Eye size={18} />
                  </button>

                  <button className="rounded-lg bg-yellow-100 p-2 text-yellow-600 hover:bg-yellow-200">
                    <Pencil size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

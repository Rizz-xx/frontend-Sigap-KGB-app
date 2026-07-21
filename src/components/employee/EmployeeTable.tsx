import { Eye, Pencil, Plus, Search } from 'lucide-react';
import { employees } from '../../data/employees';

interface EmployeeTableProps {
  isAdmin?: boolean;
}

export default function EmployeeTable({ isAdmin = false }: EmployeeTableProps) {
  console.log('isAdmin =', isAdmin);

  return (
    <section className="mt-8 rounded-3xl bg-white shadow-md">
      {/* Header */}

      <div className="flex items-center justify-between border-b p-6">
        <h2 className="text-2xl font-bold text-slate-800">Data Pegawai KGB</h2>

        {isAdmin && (
          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700">
            <Plus size={18} />
            Tambah Pegawai
          </button>
        )}
      </div>

      {/* Table */}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left font-semibold">Nama</th>

              <th className="p-4 text-left font-semibold">NIP</th>

              <th className="p-4 text-left font-semibold">Gol.</th>

              <th className="p-4 text-left font-semibold">Jabatan</th>

              <th className="p-4 text-left font-semibold">TMT KGB</th>

              <th className="p-4 text-left font-semibold">Status</th>

              <th className="p-4 text-center font-semibold">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((pegawai) => (
              <tr key={pegawai.id} className="border-b transition hover:bg-slate-50">
                <td className="p-4 font-semibold">{pegawai.nama}</td>

                <td className="p-4 text-slate-600">{pegawai.nip}</td>

                <td className="p-4">{pegawai.golongan}</td>

                <td className="p-4">{pegawai.jabatan}</td>

                <td className="p-4">{pegawai.tmt}</td>

                <td className="p-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      pegawai.status === 'Aktif'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    } `}
                  >
                    {pegawai.status}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-2">
                    <button className="rounded-lg bg-blue-100 p-2 text-blue-600 transition hover:bg-blue-200">
                      <Eye size={18} />
                    </button>

                    <button className="rounded-lg bg-yellow-100 p-2 text-yellow-600 transition hover:bg-yellow-200">
                      <Pencil size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

interface SummaryCardProps {
  title: string;
  value: string;
}

export default function SummaryCard({ title, value }: SummaryCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <p className="text-slate-500">{title}</p>

      <h2 className="mt-2 text-3xl font-bold">{value}</h2>
    </div>
  );
}

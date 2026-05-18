import { Check, X } from "lucide-react";

export type ComparisonRow = {
  feature: string;
  competitor: string | boolean;
  synaptic: string | boolean;
  detail?: string;
};

export function ComparisonTable({
  competitorName,
  rows,
}: {
  competitorName: string;
  rows: ComparisonRow[];
}) {
  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0">
      <table className="w-full text-[14px] border-separate border-spacing-0">
        <thead>
          <tr>
            <th className="text-left p-4 bg-bg-light border border-border rounded-tl-xl text-primary font-semibold">
              Critère
            </th>
            <th className="text-left p-4 bg-bg-light border border-border text-primary font-semibold">
              {competitorName}
            </th>
            <th className="text-left p-4 bg-accent text-white border border-accent rounded-tr-xl font-semibold">
              Synaptic Digital
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-bg-card" : "bg-bg-light"}>
              <td className="p-4 border-x border-b border-border align-top">
                <div className="font-semibold text-primary">{row.feature}</div>
                {row.detail && (
                  <div className="text-[12px] text-text-muted mt-1">
                    {row.detail}
                  </div>
                )}
              </td>
              <td className="p-4 border-r border-b border-border align-top">
                <Cell value={row.competitor} />
              </td>
              <td className="p-4 border-r border-b border-border align-top bg-accent/5">
                <Cell value={row.synaptic} highlight />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Cell({ value, highlight }: { value: string | boolean; highlight?: boolean }) {
  if (value === true) {
    return (
      <span className={`inline-flex items-center gap-1 ${highlight ? "text-accent" : "text-green-600"}`}>
        <Check size={16} /> Oui
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center gap-1 text-red-500">
        <X size={16} /> Non
      </span>
    );
  }
  return <span className={highlight ? "font-medium text-primary" : "text-text-dark"}>{value}</span>;
}

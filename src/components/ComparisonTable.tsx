interface Column {
  key: string;
  header: string;
}

interface ComparisonTableProps {
  columns: Column[];
  rows: Record<string, string>[];
  title?: string;
}

export default function ComparisonTable({ columns, rows, title }: ComparisonTableProps) {
  return (
    <div className="my-6">
      {title && <h4 className="text-sm font-semibold text-[#a78bfa] mb-3">{title}</h4>}
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key}>{col.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {columns.map((col) => (
                  <td key={col.key} className={col.key === columns[0].key ? "font-medium text-white" : ""}>
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

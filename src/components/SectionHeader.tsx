interface SectionHeaderProps {
  number?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      {number && (
        <span className="text-[#60a5fa] text-sm font-mono font-medium tracking-wider uppercase">
          {number}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 mb-2">{title}</h2>
      {subtitle && (
        <p className="text-[#9999b3] text-base leading-relaxed">{subtitle}</p>
      )}
      <div className="mt-4 h-px bg-gradient-to-r from-[#2a2a3d] to-transparent" />
    </div>
  );
}

import { ReactNode } from "react";

interface CardProps {
  title: string;
  icon?: string;
  accentColor?: string;
  children: ReactNode;
  className?: string;
}

export default function Card({ title, icon, accentColor = "blue", children, className = "" }: CardProps) {
  const colors: Record<string, string> = {
    blue: "border-t-blue-400",
    purple: "border-t-purple-400",
    emerald: "border-t-emerald-400",
    amber: "border-t-amber-400",
    rose: "border-t-rose-400",
    cyan: "border-t-cyan-400",
  };

  return (
    <div className={`bg-[#1a1a2e] border border-[#2a2a3d] ${colors[accentColor] || colors.blue} border-t-2 rounded-lg p-5 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        {icon && <span className="text-lg">{icon}</span>}
        <h4 className="font-semibold text-white text-sm">{title}</h4>
      </div>
      <div className="text-[#9999b3] text-sm leading-relaxed">{children}</div>
    </div>
  );
}

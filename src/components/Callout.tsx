import { ReactNode } from "react";

interface CalloutProps {
  type: "insight" | "recommendation" | "warning" | "key" | "quote";
  title?: string;
  children: ReactNode;
}

const styles = {
  insight: {
    bg: "bg-blue-500/[0.06]",
    border: "border-l-blue-400",
    icon: "💡",
    titleColor: "text-blue-400",
  },
  recommendation: {
    bg: "bg-emerald-500/[0.06]",
    border: "border-l-emerald-400",
    icon: "✅",
    titleColor: "text-emerald-400",
  },
  warning: {
    bg: "bg-amber-500/[0.06]",
    border: "border-l-amber-400",
    icon: "⚠️",
    titleColor: "text-amber-400",
  },
  key: {
    bg: "bg-purple-500/[0.06]",
    border: "border-l-purple-400",
    icon: "🔑",
    titleColor: "text-purple-400",
  },
  quote: {
    bg: "bg-[#1a1a2e]",
    border: "border-l-[#60a5fa]",
    icon: "",
    titleColor: "text-[#60a5fa]",
  },
};

export default function Callout({ type, title, children }: CalloutProps) {
  const s = styles[type];
  return (
    <div className={`${s.bg} ${s.border} border-l-4 rounded-r-lg p-4 sm:p-5 my-5`}>
      {title && (
        <div className={`font-semibold text-sm ${s.titleColor} mb-2 flex items-center gap-2`}>
          {s.icon && <span>{s.icon}</span>}
          <span>{title}</span>
        </div>
      )}
      <div className="text-[#c2c2d6] text-sm leading-relaxed">{children}</div>
    </div>
  );
}

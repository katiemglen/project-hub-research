export default function HeroSection() {
  return (
    <div className="pt-8 sm:pt-16 pb-8">
      <div className="mb-6">
        <p className="text-[#60a5fa] text-sm font-medium tracking-wide uppercase mb-3">
          Research & Analysis — February 2026
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
          Project Hub System
          <span className="block text-[#a78bfa]">Deep Research & Recommendations</span>
        </h1>
        <p className="text-[#9999b3] text-base sm:text-lg max-w-2xl leading-relaxed">
          A comprehensive analysis of project management patterns from Notion, Linear, Basecamp, ClickUp, Asana, and dozens of UX research sources — purpose-built recommendations for a 2-person team with an AI collaborator.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mt-6">
        <InfoBadge icon="👤" label="For" value="Katie & Chad" />
        <InfoBadge icon="⚡" label="Stack" value="Next.js + Convex + Vercel" />
        <InfoBadge icon="🤖" label="Researcher" value="Atlas" />
      </div>

      <div className="mt-8 h-px bg-gradient-to-r from-[#60a5fa]/30 via-[#a78bfa]/30 to-transparent" />
    </div>
  );
}

function InfoBadge({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1a1a2e] border border-[#2a2a3d] text-sm">
      <span>{icon}</span>
      <span className="text-[#70708f]">{label}:</span>
      <span className="text-[#e8e8f0] font-medium">{value}</span>
    </div>
  );
}

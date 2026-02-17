"use client";

interface Section {
  id: string;
  label: string;
  icon: string;
}

interface SidebarProps {
  sections: Section[];
  activeSection: string;
  onSectionClick: (id: string) => void;
}

export default function Sidebar({ sections, activeSection, onSectionClick }: SidebarProps) {
  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-72 bg-[#0f0f1a] border-r border-[#2a2a3d] flex-col z-40">
      {/* Logo / Title */}
      <div className="p-6 border-b border-[#2a2a3d]">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl">🏗️</span>
          <h1 className="text-lg font-bold text-white">Project Hub</h1>
        </div>
        <p className="text-xs text-[#9999b3] mt-1">Deep Research & Recommendations</p>
        <p className="text-xs text-[#70708f] mt-0.5">February 2026</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <div className="space-y-0.5">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionClick(section.id)}
              className={`sidebar-link w-full text-left px-3 py-2.5 rounded-md text-sm flex items-center gap-3 ${
                activeSection === section.id
                  ? "active text-[#60a5fa] font-medium"
                  : "text-[#9999b3] hover:text-white"
              }`}
            >
              <span className="text-base flex-shrink-0">{section.icon}</span>
              <span className="leading-tight">{section.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-[#2a2a3d]">
        <div className="text-xs text-[#70708f]">
          <p>For Katie & Chad</p>
          <p className="mt-0.5">Researcher: Atlas</p>
        </div>
      </div>
    </aside>
  );
}

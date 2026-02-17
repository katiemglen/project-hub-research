"use client";

interface Section {
  id: string;
  label: string;
  icon: string;
}

interface MobileNavProps {
  sections: Section[];
  activeSection: string;
  isOpen: boolean;
  onToggle: () => void;
  onSectionClick: (id: string) => void;
}

export default function MobileNav({ sections, activeSection, isOpen, onToggle, onSectionClick }: MobileNavProps) {
  return (
    <>
      {/* Mobile Header Bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#0f0f1a]/95 backdrop-blur-md border-b border-[#2a2a3d] z-50 flex items-center px-4">
        <button
          onClick={onToggle}
          className="p-2 rounded-md text-[#9999b3] hover:text-white hover:bg-[#1a1a2e] transition-colors"
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        <div className="ml-3 flex items-center gap-2">
          <span className="text-lg">🏗️</span>
          <span className="text-sm font-semibold text-white">Project Hub Research</span>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 mobile-overlay" onClick={onToggle}>
          <div
            className="absolute left-0 top-16 bottom-0 w-72 bg-[#0f0f1a] border-r border-[#2a2a3d] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="py-4 px-3">
              <div className="space-y-0.5">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => onSectionClick(section.id)}
                    className={`sidebar-link w-full text-left px-3 py-3 rounded-md text-sm flex items-center gap-3 ${
                      activeSection === section.id
                        ? "active text-[#60a5fa] font-medium"
                        : "text-[#9999b3]"
                    }`}
                  >
                    <span className="text-base">{section.icon}</span>
                    <span>{section.label}</span>
                  </button>
                ))}
              </div>
            </nav>
            <div className="p-4 border-t border-[#2a2a3d] text-xs text-[#70708f]">
              <p>For Katie & Chad</p>
              <p className="mt-0.5">Researcher: Atlas</p>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed header */}
      <div className="lg:hidden h-16" />
    </>
  );
}

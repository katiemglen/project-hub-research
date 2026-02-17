import SectionHeader from "./SectionHeader";

const sources = [
  { name: "Linear Method", url: "linear.app/method", desc: "Principles & practices, scoping, momentum" },
  { name: "Basecamp Shape Up", url: "basecamp.com/shapeup", desc: "Hill charts, showing progress, scopes" },
  { name: "Notion Projects", url: "notion.com/product/projects", desc: "Database views, properties, templates" },
  { name: "ClickUp Docs", url: "clickup.com/features/docs", desc: "Doc + task integration, Docs Hub" },
  { name: "Asana Features", url: "asana.com/features", desc: "Work Graph, goals, reporting" },
  { name: "Basecamp Features", url: "basecamp.com", desc: "Predictable structure, visualizations" },
  { name: "Convex Documentation", url: "docs.convex.dev", desc: "Schemas, indexes, reading/writing data, real-time, file storage, relationships" },
  { name: "Convex Stack Blog", url: "stack.convex.dev", desc: "Relationship helpers, functional data patterns" },
  { name: "Laws of UX", url: "lawsofux.com", desc: "25+ UX principles and psychological laws" },
  { name: "Anthropic Engineering Blog", url: "anthropic.com/engineering", desc: "Agent patterns for AI-human collaboration" },
];

export default function AppendixB() {
  return (
    <section id="appendix-b">
      <SectionHeader
        number="Appendix B"
        title="Research Sources"
      />

      <div className="space-y-2">
        {sources.map((source) => (
          <div key={source.name} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 bg-[#1a1a2e] border border-[#2a2a3d] rounded-lg p-4">
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-[#60a5fa]">📎</span>
              <span className="text-white font-medium text-sm">{source.name}</span>
            </div>
            <span className="text-[#70708f] text-xs hidden sm:inline">—</span>
            <span className="text-[#9999b3] text-sm flex-1">{source.desc}</span>
            <span className="text-[#70708f] text-xs font-mono">{source.url}</span>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-12 pt-8 border-t border-[#2a2a3d]">
        <p className="text-[#70708f] text-sm italic text-center">
          This research document is a living resource. As the project hub is built and refined, findings should be updated based on real usage patterns from Katie and Chad.
        </p>
      </div>
    </section>
  );
}

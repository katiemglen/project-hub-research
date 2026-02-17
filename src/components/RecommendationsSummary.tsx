import SectionHeader from "./SectionHeader";
import Callout from "./Callout";
import Card from "./Card";

export default function RecommendationsSummary() {
  return (
    <section id="recommendations-summary">
      <SectionHeader
        number="Final Section"
        title="Recommendations Summary"
        subtitle="Prioritized implementation plan, key design principles, component library recommendations, and what NOT to build."
      />

      {/* Phase 1 */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-lg">1</span>
          <div>
            <h3 className="text-lg font-bold text-white">Phase 1: Core Project Hub</h3>
            <p className="text-xs text-[#9999b3]">Build This First — Timeline: 1-2 weeks</p>
          </div>
        </div>
        <div className="space-y-2 ml-0 sm:ml-13">
          {[
            "Project detail page with tabs — Overview, Steps, Research, Links, History",
            "Step-by-step task list with 4 status states (Not Started, In Progress, Blocked, Done), drag-to-reorder, click-to-edit inline, quick-add input at bottom",
            "Progress bar on each project (simple percentage)",
            '"What\'s Next" highlight — the current active step shown prominently on Overview tab',
            "Links section — simple list of URLs with categories",
            "Basic changelog — auto-logged when steps are added, completed, or modified",
          ].map((item, i) => (
            <div key={i} className="flex gap-3 bg-[#1a1a2e] border border-[#2a2a3d] rounded-lg p-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">{i + 1}</span>
              <p className="text-[#c2c2d6] text-sm">{item}</p>
            </div>
          ))}
        </div>
        <Callout type="insight">
          <strong className="text-white">Database:</strong> Implement the full schema above (it&apos;s designed to support all phases).
        </Callout>
      </div>

      {/* Phase 2 */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-lg">2</span>
          <div>
            <h3 className="text-lg font-bold text-white">Phase 2: Research & Intelligence</h3>
            <p className="text-xs text-[#9999b3]">Build This Second — Timeline: 1-2 weeks</p>
          </div>
        </div>
        <div className="space-y-2 ml-0 sm:ml-13">
          {[
            "Research tab — Markdown documents with categories and tags",
            "Pinned research appearing on Overview tab",
            "Atlas suggestion UI — pending suggestions with accept/dismiss buttons",
            "Richer changelog — diffs showing what changed, timestamped and attributed",
            'Cross-project "Next Actions" dashboard widget',
          ].map((item, i) => (
            <div key={i} className="flex gap-3 bg-[#1a1a2e] border border-[#2a2a3d] rounded-lg p-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold">{i + 7}</span>
              <p className="text-[#c2c2d6] text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Phase 3 */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">3</span>
          <div>
            <h3 className="text-lg font-bold text-white">Phase 3: Delight & Power Features</h3>
            <p className="text-xs text-[#9999b3]">Build This Third — Timeline: 2-3 weeks</p>
          </div>
        </div>
        <div className="space-y-2 ml-0 sm:ml-13">
          {[
            "Phase/milestone grouping for steps",
            "Hill chart per project (simplified version)",
            "Keyboard shortcuts for power users",
            "Mobile-optimized view with swipe-to-complete",
            "Dark mode (if not already built into the design system)",
            "Completion animations — subtle celebratory feedback when checking steps done (confetti on project completion? 🎉)",
          ].map((item, i) => (
            <div key={i} className="flex gap-3 bg-[#1a1a2e] border border-[#2a2a3d] rounded-lg p-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">{i + 12}</span>
              <p className="text-[#c2c2d6] text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Phase 4 */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg">4</span>
          <div>
            <h3 className="text-lg font-bold text-white">Phase 4: Advanced (Future)</h3>
            <p className="text-xs text-[#9999b3]">Stretch Goals</p>
          </div>
        </div>
        <div className="space-y-2 ml-0 sm:ml-13">
          {[
            "Time estimates and tracking per step",
            "Activity heatmap (GitHub-style) showing work consistency",
            "AI-generated project status summaries",
            "Template system — save a project structure as a template for similar future projects",
            "Export — generate a PDF or Markdown summary of any project",
          ].map((item, i) => (
            <div key={i} className="flex gap-3 bg-[#1a1a2e] border border-[#2a2a3d] rounded-lg p-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-bold">{i + 18}</span>
              <p className="text-[#c2c2d6] text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Design Principles */}
      <h3 className="text-xl font-bold text-white mt-12 mb-6">Key Design Principles for Implementation</h3>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <Card title="Opinionated over Flexible" icon="🏛️" accentColor="blue">
          Don&apos;t give Katie & Chad choices about how to organize their project page. Every project hub looks the same, every time.
        </Card>
        <Card title="Speed Above All" icon="⚡" accentColor="purple">
          Every click resolves in under 200ms. Convex&apos;s real-time architecture makes this achievable.
        </Card>
        <Card title='The "2-Second Test"' icon="⏱️" accentColor="emerald">
          When you open a project, can you tell what&apos;s happening and what to do next within 2 seconds? If not, redesign.
        </Card>
        <Card title="Atlas-Aware from Day One" icon="🤖" accentColor="amber">
          Build the suggestion/changelog/attribution system from the start, not as an afterthought.
        </Card>
        <Card title="Progressive Disclosure" icon="📦" accentColor="rose">
          Show the minimum by default (steps + next action), let users drill into details (research, history) when they need it.
        </Card>
        <Card title="Write Once, Reference Everywhere" icon="🔗" accentColor="cyan">
          Research docs, changelog entries, and notes should be written once and linked from wherever they&apos;re relevant.
        </Card>
      </div>

      {/* Component Library */}
      <h3 className="text-xl font-bold text-white mt-10 mb-4">UI Component Library Recommendations</h3>
      <p className="text-[#c2c2d6] text-sm mb-4">For the actual implementation in Next.js:</p>

      <div className="grid sm:grid-cols-2 gap-3 mb-8">
        {[
          { name: "shadcn/ui", desc: "Beautiful, accessible components built on Radix UI. Perfect for this.", color: "blue" },
          { name: "@dnd-kit", desc: "Best drag-and-drop library for React (for step reordering)", color: "purple" },
          { name: "react-markdown", desc: "For rendering research docs and rich descriptions", color: "emerald" },
          { name: "framer-motion", desc: "Subtle animations for step completion, progress updates", color: "amber" },
          { name: "lucide-react", desc: "Clean icon set that matches modern design aesthetics", color: "rose" },
        ].map((lib) => (
          <div key={lib.name} className="bg-[#1a1a2e] border border-[#2a2a3d] rounded-lg p-4">
            <code className={`text-sm font-medium text-${lib.color}-400`}>{lib.name}</code>
            <p className="text-[#9999b3] text-xs mt-1">{lib.desc}</p>
          </div>
        ))}
      </div>

      {/* What NOT to Build */}
      <h3 className="text-xl font-bold text-white mt-10 mb-4">What NOT to Build</h3>
      <p className="text-[#c2c2d6] text-sm mb-4">Equally important — features to deliberately exclude:</p>

      <div className="grid sm:grid-cols-2 gap-2">
        {[
          { feature: "Gantt charts", reason: "Overkill for a 2-person team" },
          { feature: "Story points / velocity tracking", reason: "Enterprise Scrum ceremony" },
          { feature: "Multiple assignees per task", reason: "There are only 2 people" },
          { feature: "Custom fields builder", reason: "This is opinionated software, not a platform" },
          { feature: "Email notifications", reason: "They'll see updates in real-time via the dashboard" },
          { feature: "Complex permissions", reason: "Katie and Chad both have full access to everything" },
          { feature: "Approval workflows", reason: "Too formal for their collaboration style" },
          { feature: "Recurring tasks", reason: "Projects have steps, not recurring chores" },
        ].map((item) => (
          <div key={item.feature} className="flex gap-2 bg-rose-500/[0.05] border border-rose-500/10 rounded-lg p-3">
            <span className="text-rose-400 flex-shrink-0">❌</span>
            <div>
              <span className="text-white font-medium text-sm">{item.feature}</span>
              <span className="text-[#9999b3] text-sm"> — {item.reason}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

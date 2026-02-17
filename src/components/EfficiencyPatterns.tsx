import SectionHeader from "./SectionHeader";
import Callout from "./Callout";
import Card from "./Card";
import CodeBlock from "./CodeBlock";

export default function EfficiencyPatterns() {
  return (
    <section id="efficiency-patterns">
      <SectionHeader
        number="Section 7"
        title="Efficiency & Quick-Action Patterns"
        subtitle='Surfacing "What do I do next?", cross-project views, quick-entry, keyboard shortcuts, and batch operations.'
      />

      {/* What Do I Do Next */}
      <h3 className="text-lg font-bold text-white mb-4">
        &ldquo;What Do I Do Next?&rdquo; — The #1 Feature to Nail
      </h3>

      <Callout type="key" title="This is the #1 feature to nail">
        When Katie opens the Command Center, she should see her next action immediately — no searching, no clicking through projects.
      </Callout>

      <CodeBlock
        title="The Next Action Widget"
        code={`┌───────────────────────────────────────────────┐
│  ⚡ Your Next Action                           │
│                                                │
│  🏗️ Cougar Tree Care Website                   │
│  → Finish hero section responsive layout       │
│    Phase 1: Foundation  •  Step 3 of 5         │
│                                                │
│  [Open Project] [Mark Done] [I'm Blocked]      │
└───────────────────────────────────────────────┘`}
      />

      <h4 className="text-sm font-semibold text-[#a78bfa] mt-6 mb-3">Logic for determining &ldquo;next action&rdquo;:</h4>
      <div className="space-y-3 mb-6">
        {[
          { num: "1", text: 'Look for any steps with status in_progress — that\'s what\'s currently being worked on' },
          { num: "2", text: 'If nothing is in progress, find the first not_started step in the highest-priority active project' },
          { num: "3", text: 'Show the step title, which project it belongs to, and its position in the sequence' },
          { num: "4", text: 'Provide one-click actions: open the full project, mark it done, or flag as blocked' },
        ].map((item) => (
          <div key={item.num} className="flex gap-3 bg-[#1a1a2e] border border-[#2a2a3d] rounded-lg p-4">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#60a5fa]/20 text-[#60a5fa] flex items-center justify-center text-xs font-bold">{item.num}</span>
            <p className="text-[#c2c2d6] text-sm">{item.text}</p>
          </div>
        ))}
      </div>
      <p className="text-[#9999b3] text-sm italic">
        This appears on the <strong className="text-white">main dashboard</strong>, not inside a project. It&apos;s the first thing you see.
      </p>

      {/* Cross-Project */}
      <h3 className="text-lg font-bold text-white mt-10 mb-4">Cross-Project &ldquo;Next Actions&rdquo; View</h3>
      <p className="text-[#c2c2d6] text-sm mb-4">
        For someone managing multiple projects, a consolidated view:
      </p>

      <CodeBlock
        title="Cross-Project Next Actions"
        code={`⚡ Next Actions Across All Projects
──────────────────────────────────────
◑ Cougar Tree Care     → Finish hero section layout
○ JR Firewood          → Set up Vercel deployment  
○ KMC Portfolio        → Write case study for Atlas project
◑ Command Center       → Build project hub page (this project!)`}
      />

      <p className="text-[#9999b3] text-sm">
        Essentially a filtered view: for each active project, show the single next step.
      </p>

      {/* Quick Entry */}
      <h3 className="text-lg font-bold text-white mt-10 mb-4">Quick-Entry Patterns</h3>

      <Card title="Adding a step fast" icon="⚡" accentColor="blue" className="mb-4">
        <ul className="space-y-1">
          <li>• On the Steps tab, an input field at the bottom says <code className="bg-[#242440] px-1 py-0.5 rounded text-xs text-[#60a5fa]">+ Add a step...</code></li>
          <li>• Type, press Enter, step is created. <strong className="text-white">No modal, no form, no extra clicks.</strong></li>
          <li>• For more detail, click into the step after creating it.</li>
        </ul>
      </Card>

      {/* Keyboard Shortcuts */}
      <h3 className="text-lg font-bold text-white mt-8 mb-4">Keyboard Shortcuts (for power users)</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
        {[
          { key: "N", action: "New step" },
          { key: "Space", action: "Toggle status" },
          { key: "↑/↓", action: "Navigate steps" },
          { key: "Enter", action: "Open step details" },
          { key: "⌘K", action: "Quick search" },
          { key: "D", action: "Mark as done" },
          { key: "B", action: "Mark as blocked" },
        ].map((item) => (
          <div key={item.key} className="flex items-center gap-2 bg-[#1a1a2e] border border-[#2a2a3d] rounded-md p-3">
            <kbd className="bg-[#242440] border border-[#3d3d52] rounded px-2 py-0.5 text-xs text-[#60a5fa] font-mono font-medium min-w-[2.5rem] text-center">{item.key}</kbd>
            <span className="text-[#9999b3] text-sm">{item.action}</span>
          </div>
        ))}
      </div>

      {/* Batch Operations */}
      <h3 className="text-lg font-bold text-white mt-8 mb-4">Batch Operations</h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <Card title="Select Multiple Steps" icon="☑️" accentColor="blue">
          <p>Checkboxes or Shift+click for:</p>
          <ul className="mt-1 space-y-0.5">
            <li>• Mark all as done</li>
            <li>• Move to a different phase</li>
            <li>• Delete/archive</li>
          </ul>
        </Card>
        <Card title="Drag Multiple Steps" icon="↕️" accentColor="purple">
          <p>Bulk reorder by selecting and dragging as a group.</p>
        </Card>
      </div>

      {/* Time Estimates */}
      <h3 className="text-lg font-bold text-white mt-8 mb-4">Time Estimates (Optional Enhancement)</h3>
      <p className="text-[#c2c2d6] text-sm mb-4">For each step, optionally track:</p>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <Card title="Estimated Time" icon="⏱️" accentColor="blue">
          &ldquo;This should take about 2 hours&rdquo;
        </Card>
        <Card title="Actual Time" icon="✅" accentColor="emerald">
          After completion: &ldquo;This actually took 3 hours&rdquo;
        </Card>
      </div>
      <p className="text-[#9999b3] text-sm mb-4">
        Over time, this data helps with more accurate future estimates, understanding which types of work take longer than expected, and Atlas can use historical data to improve its estimates.
      </p>
      <Callout type="warning">
        <strong className="text-white">Not for v1.</strong> This is an enhancement for later.
      </Callout>
    </section>
  );
}

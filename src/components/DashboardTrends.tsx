import SectionHeader from "./SectionHeader";
import Callout from "./Callout";
import Card from "./Card";
import ComparisonTable from "./ComparisonTable";

export default function DashboardTrends() {
  return (
    <section id="dashboard-trends">
      <SectionHeader
        number="Section 5"
        title="2025-2026 Project Dashboard Trends"
        subtitle="Current industry patterns in card-based, list-based, and timeline-based views — plus AI-powered features and progress visualization."
      />

      {/* View Types */}
      <h3 className="text-lg font-bold text-white mb-4">Card-Based vs. List-Based vs. Timeline-Based</h3>

      <ComparisonTable
        columns={[
          { key: "type", header: "View Type" },
          { key: "best", header: "Best For" },
          { key: "example", header: "Example" },
        ]}
        rows={[
          { type: "Cards (Kanban)", best: "Visual people, status-oriented workflows", example: "Trello, Notion boards" },
          { type: "List", best: "Dense information, many items, power users", example: "Linear, Todoist" },
          { type: "Timeline/Gantt", best: "Date-driven projects, dependencies", example: "Asana timeline, Notion timeline" },
          { type: "Board + List hybrid", best: "Best of both worlds", example: "Linear's default view" },
        ]}
      />

      <Callout type="recommendation" title="For Katie & Chad">
        Use <strong className="text-white">list view as default</strong> for the step-by-step task list (it maps naturally to sequential steps), with a <strong className="text-white">card overview</strong> on the main dashboard (seeing all projects at a glance).
      </Callout>

      {/* Dark Mode */}
      <h3 className="text-lg font-bold text-white mt-10 mb-4">Dark Mode</h3>
      <p className="text-[#c2c2d6] text-sm mb-4">
        Every modern tool supports dark mode, and it&apos;s increasingly the default:
      </p>
      <ul className="text-[#c2c2d6] text-sm space-y-2 mb-4 list-none">
        <li className="flex gap-2"><span className="text-emerald-400">•</span>Reduces eye strain during long sessions</li>
        <li className="flex gap-2"><span className="text-emerald-400">•</span>Looks more &ldquo;premium&rdquo; and professional</li>
        <li className="flex gap-2"><span className="text-emerald-400">•</span>Should be a toggle, not forced</li>
      </ul>
      <Callout type="recommendation">
        Build with dark mode from day one. Tailwind CSS + Next.js makes this straightforward with <code className="bg-[#242440] px-1.5 py-0.5 rounded text-xs text-[#60a5fa]">dark:</code> variants.
      </Callout>

      {/* Mobile-First */}
      <h3 className="text-lg font-bold text-white mt-10 mb-4">Mobile-First Project Management</h3>
      <p className="text-[#c2c2d6] text-sm mb-4">
        The trend is clear: managing from your phone should be a <strong className="text-white">first-class experience</strong>, not an afterthought.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <Card title="Swipe to Complete" icon="👆" accentColor="blue">
          Swipe right on a step to mark it done
        </Card>
        <Card title="Quick-Add at Bottom" icon="➕" accentColor="emerald">
          Floating button to add a new step
        </Card>
        <Card title="Simplified View" icon="📱" accentColor="purple">
          Fewer columns, stacked layout, larger touch targets
        </Card>
        <Card title="Notification-Driven" icon="🔔" accentColor="amber">
          Push notification when Atlas suggests changes or when a step is completed
        </Card>
      </div>

      <Callout type="insight">
        If Katie is at a coffee shop and wants to check off a step, it should work perfectly on her phone. The Command Center should be responsive — not &ldquo;kind of works on mobile.&rdquo;
      </Callout>

      {/* AI Features */}
      <h3 className="text-lg font-bold text-white mt-10 mb-4">AI-Powered Project Management Features (2025-2026 Trends)</h3>
      <p className="text-[#c2c2d6] text-sm mb-4">The industry is rapidly adopting AI features:</p>

      <div className="space-y-3 mb-6">
        {[
          { num: "1", title: "Auto-prioritization", desc: "AI suggests which step to do next based on dependencies, deadlines, and context" },
          { num: "2", title: "Risk detection", desc: "AI flags when a project is falling behind or when a step has been \"In Progress\" too long" },
          { num: "3", title: "Progress prediction", desc: "\"At current pace, this project will finish in ~2 weeks\"" },
          { num: "4", title: "Smart summarization", desc: "AI generates a project status update from recent activity" },
          { num: "5", title: "Meeting notes → Tasks", desc: "AI extracts action items from meeting notes" },
          { num: "6", title: "Context-aware suggestions", desc: "AI recommends steps based on similar past projects" },
        ].map((item) => (
          <div key={item.num} className="flex gap-3 bg-[#1a1a2e] border border-[#2a2a3d] rounded-lg p-4">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold">{item.num}</span>
            <div>
              <p className="text-white font-medium text-sm">{item.title}</p>
              <p className="text-[#9999b3] text-sm mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <Callout type="key" title="Katie & Chad's Edge">
        They already have Atlas doing this manually. The project hub should <strong className="text-white">formalize Atlas&apos;s capabilities into the UI</strong> — dedicated spaces for AI suggestions, AI-generated summaries, and AI-assisted planning.
      </Callout>

      {/* Progress Visualization */}
      <h3 className="text-lg font-bold text-white mt-10 mb-4">Progress Visualization Patterns</h3>

      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        <Card title="Progress Bars" icon="📊" accentColor="blue">
          <p>Simple, universally understood. Shows X of Y steps complete as a filled bar.</p>
          <p className="mt-2 text-blue-300 text-xs font-medium">Best for: Quick overview, dashboard-level view</p>
        </Card>
        <Card title="Completion Rings" icon="🍩" accentColor="purple">
          <p>Circular progress indicator. Visually appealing, great for dashboards.</p>
          <p className="mt-2 text-purple-300 text-xs font-medium">Best for: Project cards on the main dashboard</p>
        </Card>
        <Card title="Activity Charts" icon="📈" accentColor="emerald">
          <p>GitHub-style contribution heatmap. Shows consistency of work over time.</p>
          <p className="mt-2 text-emerald-300 text-xs font-medium">Best for: Motivating consistency & momentum</p>
        </Card>
      </div>

      {/* Hill Charts */}
      <h3 className="text-lg font-bold text-white mt-8 mb-4">
        <span className="text-amber-400">⛰️</span> Hill Charts — Basecamp&apos;s Innovation
      </h3>
      <p className="text-[#c2c2d6] text-sm mb-4">This deserves special attention. From Basecamp&apos;s Shape Up methodology:</p>

      <Callout type="quote">
        <p className="italic">&ldquo;Every piece of work has two phases. First there&apos;s the uphill phase of figuring out what our approach is and what we&apos;re going to do. Then, once we can see all the work involved, there&apos;s the downhill phase of execution.&rdquo;</p>
      </Callout>

      <div className="my-6 bg-[#1a1a2e] border border-[#2a2a3d] rounded-lg p-6">
        <div className="text-center mb-4">
          <p className="text-sm text-[#9999b3] mb-4">The Hill Chart Model</p>
        </div>
        {/* Visual Hill Chart */}
        <div className="relative h-32 sm:h-40 mx-auto max-w-md">
          {/* Hill shape */}
          <svg viewBox="0 0 400 120" className="w-full h-full" preserveAspectRatio="none">
            <path d="M 0,120 C 50,120 100,20 200,10 C 300,20 350,120 400,120" fill="none" stroke="#2a2a3d" strokeWidth="2"/>
            <path d="M 0,120 C 50,120 100,20 200,10 C 300,20 350,120 400,120 L 400,120 L 0,120" fill="rgba(96,165,250,0.05)"/>
          </svg>
          {/* Labels */}
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-end justify-between px-4 pb-2">
            <span className="text-xs text-[#70708f]">⬆ Figuring things out</span>
            <span className="text-xs text-[#70708f]">Making it happen ⬇</span>
          </div>
          <div className="absolute top-2 left-1/2 -translate-x-1/2">
            <span className="text-xs text-[#60a5fa] font-medium">All unknowns resolved</span>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
          <div>
            <span className="text-amber-400 font-bold">Left side (uphill)</span>
            <p className="text-[#9999b3] mt-1">Still figuring things out, unknowns exist</p>
          </div>
          <div>
            <span className="text-blue-400 font-bold">Top of hill</span>
            <p className="text-[#9999b3] mt-1">All unknowns resolved, path is clear</p>
          </div>
          <div>
            <span className="text-emerald-400 font-bold">Right side (downhill)</span>
            <p className="text-[#9999b3] mt-1">Executing known work, knocking it out</p>
          </div>
        </div>
      </div>

      <Callout type="quote">
        <p className="italic">&ldquo;The hill chart allows everybody to see that somebody might be stuck without them actually saying it. A dot that doesn&apos;t move is effectively a raised hand: &lsquo;Something might be wrong here.&rsquo;&rdquo;</p>
      </Callout>

      <Callout type="insight" title="Why This Matters for Katie & Chad">
        Hill charts solve the problem of &ldquo;what percentage complete is this?&rdquo; being meaningless. A project that&apos;s &ldquo;50% complete&rdquo; could mean &ldquo;everything is going great&rdquo; or &ldquo;we&apos;re totally stuck.&rdquo; The hill shows the <em className="text-white">feeling</em> of the work — are we still figuring things out, or are we in execution mode?
      </Callout>

      <Callout type="recommendation" title="Recommendation">
        Implement a simplified hill chart per project. Each phase/milestone is a dot. Atlas can help assess where each dot should be.
      </Callout>
    </section>
  );
}

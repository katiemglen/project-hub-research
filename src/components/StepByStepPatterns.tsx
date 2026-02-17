import SectionHeader from "./SectionHeader";
import Callout from "./Callout";
import Card from "./Card";
import ComparisonTable from "./ComparisonTable";
import CodeBlock from "./CodeBlock";

export default function StepByStepPatterns() {
  return (
    <section id="step-by-step-patterns">
      <SectionHeader
        number="Section 2"
        title="Step-by-Step Task Patterns"
        subtitle="How the best tools handle ordered task lists — states, dependencies, reordering, and the psychology of completion."
      />

      {/* Task States */}
      <h3 className="text-lg font-bold text-white mb-4">Task States Beyond Done/Not-Done</h3>
      <p className="text-[#c2c2d6] text-sm mb-4">
        The basic checkbox is the foundation, but modern tools add crucial middle states:
      </p>

      <ComparisonTable
        columns={[
          { key: "state", header: "State" },
          { key: "icon", header: "Icon" },
          { key: "meaning", header: "Meaning" },
          { key: "example", header: "Example" },
        ]}
        rows={[
          { state: "Not Started", icon: "○", meaning: "Haven't begun", example: '"Set up hosting"' },
          { state: "In Progress", icon: "◑", meaning: "Currently working on", example: '"Building the homepage"' },
          { state: "Blocked", icon: "🚫", meaning: "Can't proceed", example: '"Waiting for domain transfer"' },
          { state: "Waiting", icon: "⏳", meaning: "Depends on external input", example: '"Need Chad\'s feedback on design"' },
          { state: "Skipped", icon: "⤸", meaning: "Decided not to do", example: '"Originally planned X, pivoted to Y"' },
          { state: "Done", icon: "✅", meaning: "Complete", example: '"Logo finalized"' },
        ]}
      />

      <Callout type="recommendation" title="Recommendation for Katie & Chad">
        Use <strong className="text-white">4 states</strong>: Not Started, In Progress, Blocked, Done. Add Skipped only for steps that were part of the plan but got dropped. Keep it simple — Linear&apos;s philosophy of &ldquo;simple first, then powerful&rdquo; applies here.
      </Callout>

      {/* Subtasks & Dependencies */}
      <h3 className="text-lg font-bold text-white mt-10 mb-4">Subtasks and Dependencies</h3>
      
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <Card title="Linear's Approach" icon="⚡" accentColor="blue">
          <ul className="space-y-1">
            <li>• Sub-issues nest under parent issues</li>
            <li>• Dependencies are explicit: &ldquo;This blocks that&rdquo;</li>
            <li>• Visual indicators show what&apos;s blocked</li>
          </ul>
        </Card>
        <Card title="Notion's Approach" icon="📝" accentColor="purple">
          <ul className="space-y-1">
            <li>• Sub-pages and sub-tasks within database entries</li>
            <li>• Relations link dependent items</li>
            <li>• Progress bar on parent shows % of sub-tasks complete</li>
          </ul>
        </Card>
      </div>

      <Callout type="recommendation" title="Recommendation">
        For a 2-person team, <strong className="text-white">keep dependencies implicit, not formal</strong>. Instead of building a dependency graph engine, just add a &ldquo;Blocked by&rdquo; text field. Heavy dependency management is enterprise overhead Katie and Chad don&apos;t need.
      </Callout>

      {/* Drag-to-Reorder */}
      <h3 className="text-lg font-bold text-white mt-10 mb-4">Drag-to-Reorder + Inline Editing</h3>
      <p className="text-[#c2c2d6] text-sm mb-4">
        This is <strong className="text-white">critical</strong> for the &ldquo;plan changed&rdquo; scenario. Every tool worth using supports:
      </p>
      <ul className="text-[#c2c2d6] text-sm space-y-2 mb-4 list-none">
        <li className="flex gap-2"><span className="text-blue-400">•</span><strong className="text-white">Drag handles</strong> on the left of each step for reordering</li>
        <li className="flex gap-2"><span className="text-blue-400">•</span><strong className="text-white">Click-to-edit</strong> on the step title (no separate edit mode)</li>
        <li className="flex gap-2"><span className="text-blue-400">•</span><strong className="text-white">Inline status change</strong> — click the checkbox/status icon to cycle through states</li>
      </ul>
      <p className="text-[#9999b3] text-sm">
        <em>Implementation note:</em> Each step needs an <code className="bg-[#242440] px-1.5 py-0.5 rounded text-xs text-[#60a5fa]">order</code> field (float or integer). When dragging, update the order value. Convex&apos;s real-time sync means both Katie and Chad see the reorder instantly.
      </p>

      {/* How to Handle Plan Changed */}
      <h3 className="text-lg font-bold text-white mt-10 mb-4">How to Handle &ldquo;Plan Changed&rdquo;</h3>
      
      <Callout type="quote" title="Basecamp's Shape Up — 'Imagined vs. Discovered Tasks'">
        <p className="italic">
          &ldquo;In our naive notion of a list that&apos;s planned up-front, somebody populates it with items that are gradually checked off. In real life, issues are discovered by getting involved in the problem. That means to-do lists actually grow as the team makes progress.&rdquo;
        </p>
      </Callout>

      <Callout type="insight" title="This is a profound insight">
        The task list is NOT a fixed plan — it&apos;s a living document that evolves.
      </Callout>

      <h4 className="text-sm font-semibold text-[#a78bfa] mt-6 mb-3">Recommended patterns:</h4>
      <div className="space-y-3 mb-8">
        {[
          { num: "1", title: "Add steps anywhere", desc: "Insert a new step between existing steps, not just at the end" },
          { num: "2", title: "Archive, don't delete", desc: "When a step becomes irrelevant, mark it \"Skipped\" with a note about why, and collapse/hide it. This preserves history." },
          { num: "3", title: "Version snapshots", desc: "Periodically save a snapshot of what the plan looked like. \"On Feb 10, the plan was these 8 steps. On Feb 15, after discovering X, it became these 6 steps.\"" },
          { num: "4", title: "Change annotations", desc: "When Atlas or Katie modifies the plan, a small note appears: \"Step added by Atlas on Feb 16 — new approach based on research findings\"" },
        ].map((item) => (
          <div key={item.num} className="flex gap-3 bg-[#1a1a2e] border border-[#2a2a3d] rounded-lg p-4">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#60a5fa]/20 text-[#60a5fa] flex items-center justify-center text-xs font-bold">{item.num}</span>
            <div>
              <p className="text-white font-medium text-sm">{item.title}</p>
              <p className="text-[#9999b3] text-sm mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Checklist Psychology */}
      <h3 className="text-lg font-bold text-white mt-10 mb-4">Checklist Psychology — What Motivates Completion?</h3>
      <p className="text-[#c2c2d6] text-sm mb-4">Relevant UX laws and psychological research:</p>

      <div className="space-y-4 mb-8">
        <Card title="Goal-Gradient Effect" icon="📈" accentColor="blue">
          <p>&ldquo;The tendency to approach a goal increases with proximity to the goal.&rdquo;</p>
          <p className="mt-2 text-blue-300 font-medium text-xs">→ Action: Always show a progress indicator.</p>
        </Card>
        <Card title="Zeigarnik Effect" icon="🧠" accentColor="purple">
          <p>&ldquo;People remember uncompleted or interrupted tasks better than completed tasks.&rdquo; Unfinished tasks create psychological tension that motivates completion.</p>
          <p className="mt-2 text-purple-300 font-medium text-xs">→ Action: Show incomplete tasks prominently.</p>
        </Card>
        <Card title="Endowed Progress Effect" icon="🎁" accentColor="emerald">
          <p>People are more motivated when they feel they&apos;ve already made progress. &ldquo;2 of 10 steps complete&rdquo; drives more action than a blank list.</p>
          <p className="mt-2 text-emerald-300 font-medium text-xs">→ Action: Pre-populate the first step as already done when launching a project (e.g., &ldquo;Project created&rdquo; ✅)</p>
        </Card>
        <Card title="Small Wins Compound" icon="🏆" accentColor="amber">
          <p>Breaking work into small, completable steps creates a dopamine feedback loop. Each check mark feels good.</p>
          <p className="mt-2 text-amber-300 font-medium text-xs">→ Action: Encourage steps that take 1-4 hours, not days.</p>
        </Card>
        <Card title="Visual Chunking (Miller's Law)" icon="📦" accentColor="rose">
          <p>7±2 items is the limit. Don&apos;t show 30 steps in a flat list. Group them into phases/milestones of 5-7 steps each.</p>
          <p className="mt-2 text-rose-300 font-medium text-xs">→ Action: Support milestone grouping.</p>
        </Card>
      </div>

      {/* Sprint/Milestone Grouping */}
      <h3 className="text-lg font-bold text-white mt-10 mb-4">Sprint/Milestone Grouping</h3>
      <p className="text-[#c2c2d6] text-sm mb-4">
        For Katie & Chad&apos;s use case, formal sprints are overkill. Instead, use <strong className="text-white">simple phase grouping</strong>:
      </p>

      <CodeBlock
        title="Phase Grouping Example"
        code={`Phase 1: Foundation (3 of 5 steps done) ████████░░ 60%
  ✅ Research competitors
  ✅ Choose tech stack  
  ✅ Set up repository
  ○ Build basic layout
  ○ Deploy initial version

Phase 2: Core Features (0 of 4 steps done) ░░░░░░░░░░ 0%
  ○ Add gallery component
  ○ Build contact form
  ○ SEO optimization
  ○ Mobile responsive testing`}
      />

      <p className="text-[#9999b3] text-sm">
        This creates visual chunks, shows progress per phase, and doesn&apos;t require complex sprint machinery.
      </p>
    </section>
  );
}

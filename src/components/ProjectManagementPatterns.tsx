import SectionHeader from "./SectionHeader";
import Callout from "./Callout";
import Card from "./Card";
import ComparisonTable from "./ComparisonTable";

export default function ProjectManagementPatterns() {
  return (
    <section id="project-management-patterns">
      <SectionHeader
        number="Section 1"
        title="Project Management UI/UX Patterns"
        subtitle="How the best tools handle project detail views — and what to steal from each."
      />

      {/* Notion */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-md bg-[#242440] flex items-center justify-center text-sm">📝</span>
          Notion — The Flexible Canvas
        </h3>
        
        <div className="ml-0 sm:ml-10">
          <h4 className="text-sm font-semibold text-emerald-400 mb-2">What it does well:</h4>
          <ul className="text-[#c2c2d6] text-sm space-y-2 mb-4 list-none">
            <li className="flex gap-2"><span className="text-emerald-400 mt-0.5">•</span><span>Each project is a <strong className="text-white">rich page</strong> that can contain anything: text, databases, embeds, toggles, callouts</span></li>
            <li className="flex gap-2"><span className="text-emerald-400 mt-0.5">•</span><span><strong className="text-white">Properties bar at the top</strong> — status, owner, priority, dates — gives instant project metadata</span></li>
            <li className="flex gap-2"><span className="text-emerald-400 mt-0.5">•</span><span><strong className="text-white">Nested pages</strong> let you drill into sub-topics without leaving the project</span></li>
            <li className="flex gap-2"><span className="text-emerald-400 mt-0.5">•</span><span><strong className="text-white">Database views</strong> (table, board, timeline, calendar, gallery) let you see the same data different ways</span></li>
            <li className="flex gap-2"><span className="text-emerald-400 mt-0.5">•</span><span>Templates ensure consistency across projects</span></li>
          </ul>

          <Callout type="recommendation" title="What to Steal">
            <ul className="space-y-1">
              <li>• The <strong className="text-white">top-of-page properties panel</strong> — a horizontal strip showing Status, Owner, Priority, Dates</li>
              <li>• <strong className="text-white">Toggle sections</strong> that collapse research/notes when you&apos;re in &ldquo;execution mode&rdquo;</li>
              <li>• The concept of a page being both a <strong className="text-white">document and a container</strong> for structured data</li>
            </ul>
          </Callout>

          <Callout type="warning" title="What to Avoid">
            Notion&apos;s flexibility is also its weakness — blank page anxiety. People abandon Notion because setting it up is too much work.
          </Callout>
        </div>
      </div>

      {/* Linear */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-md bg-[#242440] flex items-center justify-center text-sm">⚡</span>
          Linear — The Speed Demon
        </h3>
        
        <div className="ml-0 sm:ml-10">
          <h4 className="text-sm font-semibold text-emerald-400 mb-2">What it does well:</h4>
          <ul className="text-[#c2c2d6] text-sm space-y-2 mb-4 list-none">
            <li className="flex gap-2"><span className="text-emerald-400 mt-0.5">•</span><span><strong className="text-white">Purpose-built</strong> — everything has one place and one way to work</span></li>
            <li className="flex gap-2"><span className="text-emerald-400 mt-0.5">•</span><span>Projects have a <strong className="text-white">brief</strong> (overview doc), <strong className="text-white">issues</strong> (tasks), <strong className="text-white">milestones</strong>, and <strong className="text-white">status updates</strong></span></li>
            <li className="flex gap-2"><span className="text-emerald-400 mt-0.5">•</span><span>Keyboard-first: <code className="bg-[#242440] px-1.5 py-0.5 rounded text-xs text-[#60a5fa]">C</code> to create issue, <code className="bg-[#242440] px-1.5 py-0.5 rounded text-xs text-[#60a5fa]">S</code> for status, <code className="bg-[#242440] px-1.5 py-0.5 rounded text-xs text-[#60a5fa]">P</code> for priority</span></li>
            <li className="flex gap-2"><span className="text-emerald-400 mt-0.5">•</span><span><strong className="text-white">Auto-grouping by status</strong> (Backlog → Todo → In Progress → Done)</span></li>
            <li className="flex gap-2"><span className="text-emerald-400 mt-0.5">•</span><span>Real-time search that actually works (Cmd+K everything)</span></li>
          </ul>

          <Callout type="quote" title="Linear Method Philosophy">
            <p className="italic">&ldquo;Build for the creators. Software project management tools should build with the end users in mind. Keeping individuals productive is more important than generating perfect reports.&rdquo;</p>
            <p className="italic mt-2">&ldquo;Say no to busy work. Your tools should not make you the designer and maintainer of them.&rdquo;</p>
            <p className="italic mt-2">&ldquo;Simple first, then powerful.&rdquo;</p>
          </Callout>

          <Callout type="recommendation" title="What to Steal">
            <ul className="space-y-1">
              <li>• The <strong className="text-white">clean, opinionated layout</strong>: overview at top, task list below, no configuration needed</li>
              <li>• <strong className="text-white">Status workflow</strong> built in: Backlog → Todo → In Progress → Done → Cancelled</li>
              <li>• The speed — every interaction under 200ms (Doherty Threshold confirms: productivity soars when interactions take &lt;400ms)</li>
            </ul>
          </Callout>
        </div>
      </div>

      {/* Basecamp */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-md bg-[#242440] flex items-center justify-center text-sm">🏕️</span>
          Basecamp — The Clarity Machine
        </h3>
        
        <div className="ml-0 sm:ml-10">
          <h4 className="text-sm font-semibold text-emerald-400 mb-2">What it does well:</h4>
          <ul className="text-[#c2c2d6] text-sm space-y-2 mb-4 list-none">
            <li className="flex gap-2"><span className="text-emerald-400 mt-0.5">•</span><span>Each project is a <strong className="text-white">predictably structured place</strong> with fixed sections: Message Board, To-dos, Schedule, Docs & Files, Campfire</span></li>
            <li className="flex gap-2"><span className="text-emerald-400 mt-0.5">•</span><span><strong className="text-white">Hill Charts</strong> — revolutionary progress visualization (detailed in Section 5)</span></li>
            <li className="flex gap-2"><span className="text-emerald-400 mt-0.5">•</span><span>No customization paralysis — every project looks the same</span></li>
            <li className="flex gap-2"><span className="text-emerald-400 mt-0.5">•</span><span>Reports show &ldquo;the real work, actual evidence of progress being made (or not made)&rdquo;</span></li>
          </ul>

          <Callout type="recommendation" title="What to Steal">
            <ul className="space-y-1">
              <li>• <strong className="text-white">Fixed, predictable structure</strong> — every project hub has the same sections in the same order</li>
              <li>• Hill Charts concept for visualizing progress beyond percentages</li>
              <li>• The principle that a project &ldquo;holds everything — and everyone — together in one tidy place&rdquo;</li>
            </ul>
          </Callout>
        </div>
      </div>

      {/* ClickUp */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-md bg-[#242440] flex items-center justify-center text-sm">📋</span>
          ClickUp — Docs + Tasks Fusion
        </h3>
        
        <div className="ml-0 sm:ml-10">
          <ul className="text-[#c2c2d6] text-sm space-y-2 mb-4 list-none">
            <li className="flex gap-2"><span className="text-emerald-400 mt-0.5">•</span><span>Documents and tasks live together — you can embed tasks inside docs</span></li>
            <li className="flex gap-2"><span className="text-emerald-400 mt-0.5">•</span><span><strong className="text-white">Docs Hub</strong> organizes all docs with verified wikis, templates, search/sort/filter</span></li>
            <li className="flex gap-2"><span className="text-emerald-400 mt-0.5">•</span><span>Real-time collaborative editing with comments that become tasks</span></li>
            <li className="flex gap-2"><span className="text-emerald-400 mt-0.5">•</span><span>Slash commands (<code className="bg-[#242440] px-1.5 py-0.5 rounded text-xs text-[#60a5fa]">/</code>) for quick formatting and embedding</span></li>
          </ul>

          <Callout type="recommendation" title="What to Steal">
            <ul className="space-y-1">
              <li>• The ability to <strong className="text-white">convert comments into tasks</strong> — when Atlas suggests a step, Katie can turn it into an actual task with one click</li>
              <li>• <strong className="text-white">Docs Hub pattern</strong> for organizing research per project</li>
            </ul>
          </Callout>
        </div>
      </div>

      {/* Asana */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-md bg-[#242440] flex items-center justify-center text-sm">🎯</span>
          Asana — The Overview Champion
        </h3>
        
        <div className="ml-0 sm:ml-10">
          <ul className="text-[#c2c2d6] text-sm space-y-2 mb-4 list-none">
            <li className="flex gap-2"><span className="text-emerald-400 mt-0.5">•</span><span><strong className="text-white">Project Overview tab</strong> — customizable dashboard showing status, key resources, milestones</span></li>
            <li className="flex gap-2"><span className="text-emerald-400 mt-0.5">•</span><span>Multiple views of same data (list, board, timeline, calendar, Gantt)</span></li>
            <li className="flex gap-2"><span className="text-emerald-400 mt-0.5">•</span><span><strong className="text-white">Goals and reporting</strong> connecting daily work to bigger objectives</span></li>
            <li className="flex gap-2"><span className="text-emerald-400 mt-0.5">•</span><span>Custom fields for any metadata you need</span></li>
          </ul>

          <Callout type="recommendation" title="What to Steal">
            The <strong className="text-white">Overview tab</strong> concept — a dashboard view of the project before you dive into tasks.
          </Callout>
        </div>
      </div>

      {/* Comparison Table */}
      <h3 className="text-lg font-bold text-white mb-4">Comparison Table: Project Detail Views</h3>
      <ComparisonTable
        columns={[
          { key: "feature", header: "Feature" },
          { key: "notion", header: "Notion" },
          { key: "linear", header: "Linear" },
          { key: "basecamp", header: "Basecamp" },
          { key: "clickup", header: "ClickUp" },
          { key: "asana", header: "Asana" },
        ]}
        rows={[
          { feature: "Overview/Brief", notion: "✅ Page", linear: "✅ Project brief", basecamp: "✅ Message Board", clickup: "✅ Doc", asana: "✅ Overview tab" },
          { feature: "Task List", notion: "✅ Database", linear: "✅ Issues", basecamp: "✅ To-dos", clickup: "✅ Tasks", asana: "✅ List/Board" },
          { feature: "Progress Visual", notion: "✅ Progress bar", linear: "✅ % complete", basecamp: "✅ Hill Charts", clickup: "✅ Progress bar", asana: "✅ Milestones" },
          { feature: "Docs/Research", notion: "✅ Nested pages", linear: "✅ Project docs", basecamp: "✅ Docs & Files", clickup: "✅ Docs Hub", asana: "✅ Attachments" },
          { feature: "Real-time collab", notion: "✅ Live editing", linear: "✅ Live sync", basecamp: "✅ Auto-updates", clickup: "✅ Live editing", asana: "✅ Live sync" },
          { feature: "Changelog", notion: "⚠️ Manual", linear: "✅ Built-in", basecamp: "✅ Built-in", clickup: "⚠️ Activity log", asana: "✅ Activity log" },
          { feature: "Non-technical UX", notion: "⚠️ Steep curve", linear: "⚠️ Dev-focused", basecamp: "✅ Very easy", clickup: "⚠️ Feature bloat", asana: "✅ Good" },
          { feature: "Mobile-friendly", notion: "✅ Good", linear: "✅ Excellent", basecamp: "✅ Good", clickup: "⚠️ Okay", asana: "✅ Good" },
        ]}
      />

      {/* What Makes People Actually Use These */}
      <h3 className="text-lg font-bold text-white mt-10 mb-4">What Makes People ACTUALLY Use These vs. Abandoning Them?</h3>
      
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <Card title="Immediate Value" icon="🎯" accentColor="blue">
          If you can&apos;t get value in the first 5 minutes, people leave. <em className="text-[#70708f]">(Paradox of the Active User: &ldquo;Users never read manuals but start using the software immediately&rdquo;)</em>
        </Card>
        <Card title="Low Update Friction" icon="⚡" accentColor="emerald">
          Checking a box should take 1 click, not 3 pages of navigation.
        </Card>
        <Card title="Visual Progress" icon="📊" accentColor="purple">
          The Goal-Gradient Effect: people work harder as they see themselves getting closer to completion.
        </Card>
        <Card title="Consistency" icon="🔄" accentColor="amber">
          Same structure every time means zero cognitive load to find things. <em className="text-[#70708f]">(Jakob&apos;s Law)</em>
        </Card>
        <Card title="Not Too Many Options" icon="🎚️" accentColor="rose">
          Choice Overload kills adoption. Better to have fewer, better features.
        </Card>
      </div>

      {/* Minimum Viable */}
      <Callout type="key" title="Minimum Viable Project Hub">
        <p className="mb-2">The absolute minimum that&apos;s still useful:</p>
        <ol className="space-y-1 list-decimal list-inside">
          <li>Project title + one-line description</li>
          <li>Status indicator (Active / Paused / Complete)</li>
          <li>Ordered checklist of steps</li>
          <li>&ldquo;What&apos;s next&rdquo; highlight</li>
          <li>A place for notes/context</li>
        </ol>
        <p className="mt-2 text-[#a78bfa] font-medium">Everything else is enhancement.</p>
      </Callout>
    </section>
  );
}

import SectionHeader from "./SectionHeader";
import Callout from "./Callout";
import Card from "./Card";
import ComparisonTable from "./ComparisonTable";
import CodeBlock from "./CodeBlock";

export default function ResearchIntegration() {
  return (
    <section id="research-integration">
      <SectionHeader
        number="Section 3"
        title="Research Integration Patterns"
        subtitle="Every project generates research — competitive analysis, technical decisions, design references, meeting notes. How to organize it without burying the task list."
      />

      <Callout type="insight" title="The Challenge">
        Research is essential context but can <strong className="text-white">bury the task list</strong> if not organized well. The key is keeping it discoverable without cluttering.
      </Callout>

      {/* How Tools Solve This */}
      <h3 className="text-lg font-bold text-white mt-8 mb-4">How the Best Tools Solve This</h3>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <Card title="Notion" icon="📝" accentColor="blue">
          <ul className="space-y-1">
            <li>• Research lives as <strong className="text-white">nested pages</strong> within the project</li>
            <li>• &ldquo;Research&rdquo; toggle section collapses when executing</li>
            <li>• <strong className="text-white">Linked databases</strong> reference research from elsewhere</li>
            <li className="text-[#70708f] text-xs">Strength: incredibly flexible. Weakness: you have to build the system yourself.</li>
          </ul>
        </Card>
        <Card title="ClickUp" icon="📋" accentColor="emerald">
          <ul className="space-y-1">
            <li>• Every project has a separate <strong className="text-white">Docs</strong> section</li>
            <li>• Docs can be organized, searched, and filtered independently</li>
            <li>• <strong className="text-white">Relationship links</strong> connect docs to specific tasks</li>
            <li className="text-[#70708f] text-xs">Key insight: docs are &ldquo;alongside tasks, not buried inside them&rdquo;</li>
          </ul>
        </Card>
        <Card title="Confluence/GitBook/Slite" icon="📚" accentColor="purple">
          <ul className="space-y-1">
            <li>• Hierarchical page trees for organizing knowledge</li>
            <li>• <strong className="text-white">Search is king</strong> — primary way people find things</li>
            <li>• Version history on every page</li>
            <li>• Cross-referencing between pages</li>
          </ul>
        </Card>
      </div>

      {/* The Tab/Section Pattern */}
      <h3 className="text-lg font-bold text-white mt-8 mb-4">What Works: The Tab/Section Pattern</h3>
      <p className="text-[#c2c2d6] text-sm mb-4">
        After analyzing all approaches, the clear winner for a project hub is <strong className="text-white">tabs or collapsible sections</strong>:
      </p>

      <CodeBlock
        title="Recommended Project Detail Layout"
        code={`┌─────────────────────────────────────────────────────┐
│  🏗️ Project: Cougar Tree Care Website               │
│  Status: Active    Progress: ████████░░ 60%         │
│                                                      │
│  [Overview] [Steps] [Research] [Links] [History]     │
│  ─────────────────────────────────────────────────── │
│                                                      │
│  📋 Steps (Active Tab)                               │
│  ├─ ✅ Step 1: Set up repository                     │
│  ├─ ✅ Step 2: Design mockup approved                │
│  ├─ ◑ Step 3: Build homepage → IN PROGRESS           │
│  ├─ ○ Step 4: Add services section                   │
│  └─ ○ Step 5: Deploy to production                   │
│                                                      │
│  ⚡ Next: Finish homepage hero section               │
└─────────────────────────────────────────────────────┘`}
      />

      <h4 className="text-sm font-semibold text-[#a78bfa] mt-6 mb-3">Why tabs beat other patterns:</h4>
      <div className="space-y-2 mb-6">
        {[
          { pattern: "Sections/accordion", issue: "Can overwhelm with too much content on one scroll" },
          { pattern: "Separate linked pages", issue: "Require navigation away — context switching kills flow" },
          { pattern: "Tabs", issue: "Keep everything in one place, show one thing at a time, zero cognitive overload", good: true },
        ].map((item) => (
          <div key={item.pattern} className={`flex gap-3 p-3 rounded-md ${item.good ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-[#1a1a2e] border border-[#2a2a3d]'}`}>
            <span className={item.good ? 'text-emerald-400' : 'text-amber-400'}>{item.good ? '✅' : '⚠️'}</span>
            <div>
              <span className="text-white font-medium text-sm">{item.pattern}: </span>
              <span className="text-[#9999b3] text-sm">{item.issue}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recommended Tab Structure */}
      <Callout type="recommendation" title="Recommended Tab Structure for Katie & Chad">
        <ComparisonTable
          columns={[
            { key: "tab", header: "Tab" },
            { key: "contains", header: "Contains" },
            { key: "when", header: "When to Use" },
          ]}
          rows={[
            { tab: "Overview", contains: "What the project is, why it matters, current status summary, key metrics", when: "Quick status check" },
            { tab: "Steps", contains: "The ordered task list with statuses, the active \"what's next\" highlight", when: "Daily execution" },
            { tab: "Research", contains: "All findings, decisions, competitive analysis, Atlas's research docs", when: "Before planning or when stuck" },
            { tab: "Links", contains: "Live sites, repos, docs, Figma files, external resources", when: "Quick reference" },
            { tab: "History", contains: "Changelog of what happened, when, and who did it", when: "Review & accountability" },
          ]}
        />
      </Callout>

      {/* Keeping Research Discoverable */}
      <h3 className="text-lg font-bold text-white mt-10 mb-4">Keeping Research Discoverable Without Cluttering</h3>
      
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex gap-3 bg-[#1a1a2e] border border-[#2a2a3d] rounded-lg p-4">
          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#60a5fa]/20 text-[#60a5fa] flex items-center justify-center text-xs font-bold">1</span>
          <div>
            <p className="text-white font-medium text-sm">Pin key findings</p>
            <p className="text-[#9999b3] text-xs mt-0.5">The 3-5 most important research takeaways appear on the Overview tab as a summary</p>
          </div>
        </div>
        <div className="flex gap-3 bg-[#1a1a2e] border border-[#2a2a3d] rounded-lg p-4">
          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#60a5fa]/20 text-[#60a5fa] flex items-center justify-center text-xs font-bold">2</span>
          <div>
            <p className="text-white font-medium text-sm">Tag research entries</p>
            <p className="text-[#9999b3] text-xs mt-0.5">Each research doc has tags (e.g., &ldquo;competitive analysis&rdquo;, &ldquo;technical decision&rdquo;) for filtering</p>
          </div>
        </div>
        <div className="flex gap-3 bg-[#1a1a2e] border border-[#2a2a3d] rounded-lg p-4">
          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#60a5fa]/20 text-[#60a5fa] flex items-center justify-center text-xs font-bold">3</span>
          <div>
            <p className="text-white font-medium text-sm">Link research to steps</p>
            <p className="text-[#9999b3] text-xs mt-0.5">&ldquo;This step was informed by [this research finding]&rdquo;</p>
          </div>
        </div>
        <div className="flex gap-3 bg-[#1a1a2e] border border-[#2a2a3d] rounded-lg p-4">
          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#60a5fa]/20 text-[#60a5fa] flex items-center justify-center text-xs font-bold">4</span>
          <div>
            <p className="text-white font-medium text-sm">Search within project</p>
            <p className="text-[#9999b3] text-xs mt-0.5">A search bar scoped to the project&apos;s knowledge base</p>
          </div>
        </div>
      </div>
    </section>
  );
}

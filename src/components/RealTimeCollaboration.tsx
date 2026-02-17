import SectionHeader from "./SectionHeader";
import Callout from "./Callout";
import Card from "./Card";
import CodeBlock from "./CodeBlock";

export default function RealTimeCollaboration() {
  return (
    <section id="real-time-collaboration">
      <SectionHeader
        number="Section 4"
        title="Real-Time Collaboration with AI"
        subtitle="The Atlas + Katie + Chad model — most tools assume human-only collaboration. This is different."
      />

      <Callout type="key" title="What Makes This Unique">
        Most project management tools assume human-only collaboration. Katie & Chad have a third collaborator: <strong className="text-white">Atlas (AI)</strong>. The project hub must be designed for AI-human co-management from day one.
      </Callout>

      {/* AI-Human Co-Management */}
      <h3 className="text-lg font-bold text-white mt-8 mb-4">Pattern: Suggestion → Confirmation</h3>
      
      <div className="space-y-3 mb-6">
        {[
          { num: "1", title: "Atlas suggests", desc: "Based on research, context, and progress, Atlas proposes new steps, reorders, or modifications to the plan" },
          { num: "2", title: "Visual distinction", desc: "Atlas's suggestions appear with a subtle indicator (e.g., ✨ sparkle icon, or a light blue highlight) so it's clear what's AI-generated vs. human-confirmed" },
          { num: "3", title: "Human confirms", desc: "Katie or Chad can accept, modify, or dismiss Atlas's suggestions with one click" },
          { num: "4", title: "Once confirmed", desc: "The suggestion becomes a regular step, indistinguishable from human-created ones (except in the changelog)" },
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

      <CodeBlock
        title="Example AI Suggestion Flow"
        code={`Atlas suggests:
  ✨ "Based on the research findings, I recommend adding these steps 
     before Step 4:"
  ✨ ○ Step 3a: Add Google Business Profile optimization
  ✨ ○ Step 3b: Create location-specific landing pages
  
  [Accept All] [Accept Step 3a] [Accept Step 3b] [Dismiss]`}
      />

      {/* Edit History */}
      <h3 className="text-lg font-bold text-white mt-10 mb-4">Edit History and Attribution</h3>
      <p className="text-[#c2c2d6] text-sm mb-4">
        Every change to the project should record:
      </p>
      <div className="grid sm:grid-cols-2 gap-3 mb-6">
        <div className="bg-[#1a1a2e] border border-[#2a2a3d] rounded-lg p-4">
          <span className="text-blue-400 font-bold text-sm">Who</span>
          <p className="text-[#9999b3] text-sm mt-1">Made the change (Katie, Chad, or Atlas)</p>
        </div>
        <div className="bg-[#1a1a2e] border border-[#2a2a3d] rounded-lg p-4">
          <span className="text-purple-400 font-bold text-sm">What</span>
          <p className="text-[#9999b3] text-sm mt-1">Changed (added step, completed step, reordered, edited)</p>
        </div>
        <div className="bg-[#1a1a2e] border border-[#2a2a3d] rounded-lg p-4">
          <span className="text-emerald-400 font-bold text-sm">When</span>
          <p className="text-[#9999b3] text-sm mt-1">It happened (auto-timestamped)</p>
        </div>
        <div className="bg-[#1a1a2e] border border-[#2a2a3d] rounded-lg p-4">
          <span className="text-amber-400 font-bold text-sm">Why</span>
          <p className="text-[#9999b3] text-sm mt-1">Optional note — especially useful for Atlas to explain reasoning</p>
        </div>
      </div>
      <p className="text-[#9999b3] text-sm italic">
        This creates the <strong className="text-white">History tab</strong> content automatically.
      </p>

      {/* Comments/Discussion */}
      <h3 className="text-lg font-bold text-white mt-10 mb-4">Comments/Discussion on Individual Steps</h3>
      <Callout type="recommendation" title="For a 2-person team + AI">
        <p>Heavy discussion threads are overkill. Instead:</p>
        <ul className="mt-2 space-y-1">
          <li>• Each step has an optional <strong className="text-white">&ldquo;Notes&rdquo; expandable</strong> area</li>
          <li>• Atlas can add context notes to explain why a step exists</li>
          <li>• Katie or Chad can add notes about blockers, decisions, or context</li>
          <li>• Notes are timestamped and attributed</li>
        </ul>
      </Callout>

      {/* Convex Real-Time */}
      <h3 className="text-lg font-bold text-white mt-10 mb-4">How Convex Real-Time Sync Enables This</h3>

      <Callout type="quote">
        <p className="italic">&ldquo;Convex is automatically realtime! Convex tracks the dependencies to your query functions, including database changes, and triggers the subscription in the client libraries.&rdquo;</p>
      </Callout>

      <p className="text-[#c2c2d6] text-sm mb-4 mt-4">This means:</p>

      <div className="space-y-3 mb-6">
        <Card title="Instant Cross-Device Sync" icon="📱" accentColor="cyan">
          When Katie checks a step on her laptop, Chad sees it update on his phone <strong className="text-white">instantly</strong> — no polling, no refresh.
        </Card>
        <Card title="Atlas Updates Are Live" icon="🤖" accentColor="purple">
          When Atlas modifies the plan via API, both Katie and Chad see changes appear in real-time.
        </Card>
        <Card title="Optimistic Updates" icon="⚡" accentColor="blue">
          The UI updates before the server confirms, making it feel instant.
        </Card>
        <Card title="Consistent Snapshots" icon="🔒" accentColor="emerald">
          Everyone sees the same state at the same time — no &ldquo;stale data&rdquo; bugs.
        </Card>
      </div>

      <Callout type="insight" title="Huge Advantage">
        This is a <strong className="text-white">huge advantage</strong> over tools that require manual refresh or have eventual consistency delays. No WebSocket setup, no polling, no cache invalidation — Convex handles all of this automatically.
      </Callout>
    </section>
  );
}

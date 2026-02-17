import SectionHeader from "./SectionHeader";
import Callout from "./Callout";
import Card from "./Card";

export default function BuildProcessStandards() {
  return (
    <section id="build-process-standards">
      <SectionHeader
        title="🔨 Build Process Standards"
        subtitle="How we go from idea to deployed feature. Established 2026-02-16 — applies to ALL future work."
      />

      <Callout type="key" title="Why Process Matters">
        <p>
          Without a clear build process, we waste tokens rebuilding things Katie doesn&apos;t like,
          deploy untested features site-wide, and lose track of what was decided. These standards prevent all of that.
        </p>
      </Callout>

      {/* Prompt Dialogue */}
      <h3 className="text-xl font-bold text-white mt-10 mb-4">Prompt Dialogue — Before Every Build</h3>

      <div className="space-y-3 mb-8">
        <Card title="Step 1: Rough Idea" icon="💡" accentColor="blue">
          <p>Katie or Chad shares the initial idea — can be rough, vague, or half-formed. That&apos;s fine.</p>
        </Card>
        <Card title="Step 2: Clarifying Questions" icon="❓" accentColor="purple">
          <p>Atlas asks clarifying questions. <strong className="text-white">Be thorough, not assumptive.</strong> Don&apos;t guess intent — ask.</p>
        </Card>
        <Card title="Step 3: Draft Prompt Together" icon="📝" accentColor="emerald">
          <p>Review wording, intent, and scope together. Make sure everyone agrees on what&apos;s being built.</p>
        </Card>
        <Card title="Step 4: Approve → Execute" icon="🚀" accentColor="amber">
          <p>Katie/Chad give the green light. <strong className="text-white">Only then</strong> does building begin.</p>
        </Card>
      </div>

      <Callout type="warning" title="No Skipping Steps">
        <p>This process was established 2026-02-16 and applies to ALL future work. Skipping steps leads to wasted tokens and rebuilds.</p>
      </Callout>

      {/* Preview/Demo Strategy */}
      <h3 className="text-xl font-bold text-white mt-10 mb-4">Preview / Demo Strategy</h3>

      <Callout type="insight" title="The Core Principle">
        <p><strong className="text-white">Test on ONE page first</strong> — never roll out features site-wide before approval.</p>
      </Callout>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <Card title="How to Preview" icon="👀" accentColor="blue">
          <ul className="space-y-2 list-disc list-inside">
            <li>Create a <code className="text-blue-300 bg-blue-500/10 px-1 rounded">/preview</code> route for testing</li>
            <li>Or use Vercel preview deployments</li>
            <li>Edit one page at a time (home page, single blog post, etc.)</li>
            <li>Never do full project rebuilds for testing</li>
          </ul>
        </Card>
        <Card title="Why This Matters" icon="💰" accentColor="emerald">
          <ul className="space-y-2 list-disc list-inside">
            <li>Conserves tokens and time</li>
            <li>Prevents rebuilding things Katie doesn&apos;t like</li>
            <li>Katie reviews → approves or rejects</li>
            <li>Then roll site-wide only after approval</li>
          </ul>
        </Card>
      </div>

      {/* Design Decisions Documentation */}
      <h3 className="text-xl font-bold text-white mt-10 mb-4">Design Decisions Documentation</h3>

      <Card title="DESIGN-DECISIONS.md" icon="📋" accentColor="purple" className="mb-6">
        <ul className="space-y-2 list-disc list-inside">
          <li>Every project gets a <code className="text-purple-300 bg-purple-500/10 px-1 rounded">DESIGN-DECISIONS.md</code> file</li>
          <li>Save all <strong className="text-white">approved decisions</strong>, parked ideas, and demo-first items</li>
          <li>This is the <strong className="text-white">source of truth</strong> for what was agreed upon</li>
          <li>First example: <code className="text-purple-300 bg-purple-500/10 px-1 rounded">projects/katherine-marie-blog/DESIGN-DECISIONS.md</code></li>
        </ul>
      </Card>

      <Callout type="recommendation" title="When In Doubt, Check DESIGN-DECISIONS.md">
        <p>Before making any design choice, check if it was already decided. If it&apos;s not documented, discuss and document it before building.</p>
      </Callout>

      {/* Token & Time Conservation */}
      <h3 className="text-xl font-bold text-white mt-10 mb-4">Token &amp; Time Conservation</h3>

      <div className="grid sm:grid-cols-2 gap-4">
        <Card title="Do" icon="✅" accentColor="emerald">
          <ul className="space-y-2 list-disc list-inside">
            <li>Be concise — small tests, not full rebuilds</li>
            <li>Page-level updates for testing</li>
            <li>Batch related changes together</li>
            <li>Use preview deployments</li>
          </ul>
        </Card>
        <Card title="Don't" icon="🚫" accentColor="rose">
          <ul className="space-y-2 list-disc list-inside">
            <li>Rebuild entire projects for small tests</li>
            <li>Full deployments for testing features</li>
            <li>Scatter small changes across many commits</li>
            <li>Push to production before approval</li>
          </ul>
        </Card>
      </div>
    </section>
  );
}

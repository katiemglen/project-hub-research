import SectionHeader from "./SectionHeader";
import Callout from "./Callout";
import Card from "./Card";

export default function ResearchDocumentStandards() {
  return (
    <section id="research-document-standards">
      <SectionHeader
        title="📐 Research Document Standards"
        subtitle="Official standards for ALL future research documents. Every research doc we produce must follow these rules — no exceptions."
      />

      <Callout type="key" title="Why This Section Exists">
        <p>
          Research docs are <strong className="text-white">teaching documents first</strong>. Katie learns while building.
          If a research doc doesn&apos;t teach, explain, and contextualize — it failed, no matter how thorough the data is.
        </p>
      </Callout>

      {/* Format Requirements */}
      <h3 className="text-xl font-bold text-white mt-10 mb-4">Format Requirements</h3>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <Card title="Hosting & Layout" icon="🌐" accentColor="blue">
          <ul className="space-y-2 list-disc list-inside">
            <li><strong className="text-white">Vercel-hosted</strong> with left-side navigation</li>
            <li>Highlighted markup for key information</li>
            <li>This is the <strong className="text-white">staple format</strong> for all research documents</li>
          </ul>
        </Card>
        <Card title="Structure" icon="🏗️" accentColor="purple">
          <ul className="space-y-2 list-disc list-inside">
            <li>Clear sections with logical flow</li>
            <li>Highlighted callouts for important information</li>
            <li>Scannable — key points visible without deep reading</li>
          </ul>
        </Card>
      </div>

      {/* Content Rules */}
      <h3 className="text-xl font-bold text-white mt-10 mb-4">Content Rules — Mandatory for Every Research Doc</h3>

      <Callout type="warning" title="These Are Non-Negotiable">
        <p>Every single research document must follow all 8 rules below. They exist because we learned the hard way what happens when they&apos;re skipped.</p>
      </Callout>

      <div className="space-y-4 mb-8">
        <Card title="1. Contextualize Everything" icon="🎯" accentColor="emerald">
          <p>Always include <strong className="text-white">project-specific examples</strong> showing how a finding applies to the current project.</p>
          <p className="mt-2">Don&apos;t just explain what something is — show exactly how it would be used in the project we&apos;re working on. <strong className="text-emerald-300">This is how Katie learns.</strong></p>
        </Card>

        <Card title="2. Define Terms Before Comparing" icon="📖" accentColor="blue">
          <p>Before comparing options (e.g., CSS Scroll-Driven vs Motion vs GSAP), <strong className="text-white">define what each option IS first</strong>.</p>
          <p className="mt-2">Never assume the reader knows the vocabulary. Treat every new term as a teaching moment.</p>
        </Card>

        <Card title="3. Dated vs Current — With WHY" icon="📅" accentColor="purple">
          <p>When discussing trends, always explain <strong className="text-white">WHY something is dated</strong>.</p>
          <p className="mt-2">Compare the familiar (what they&apos;ve seen before) to the new approach. This bridges understanding.</p>
        </Card>

        <Card title="4. Teaching Format" icon="🎓" accentColor="amber">
          <p>Research docs <strong className="text-white">ARE teaching documents</strong>. Explain concepts so Katie learns while building.</p>
          <p className="mt-2"><strong className="text-amber-300">This is not optional</strong> — it&apos;s the primary purpose alongside the research itself.</p>
        </Card>

        <Card title="5. Verify All Links" icon="🔗" accentColor="rose">
          <p>Every example website must be <strong className="text-white">tested and confirmed working</strong> before including.</p>
          <p className="mt-2">Broken links waste time and erode trust.</p>
        </Card>

        <Card title="6. English-First Examples" icon="🌍" accentColor="cyan">
          <p>Primary language is <strong className="text-white">English</strong>. If a non-English site is included, note how to translate it and why it&apos;s worth viewing.</p>
        </Card>

        <Card title="7. Element Descriptions" icon="🏷️" accentColor="emerald">
          <p>Include brief descriptions of <strong className="text-white">what elements/features are</strong> + how they&apos;d be used.</p>
          <p className="mt-2">Never drop a technical term without context.</p>
        </Card>

        <Card title="8. Comparison Tables + Definitions" icon="📊" accentColor="blue">
          <p>When comparing options, always <strong className="text-white">pair the table with definitions</strong> of what&apos;s being compared.</p>
          <p className="mt-2">Tables are great for quick scanning but useless if the reader doesn&apos;t know what the columns mean.</p>
        </Card>
      </div>

      {/* Visual Formatting */}
      <h3 className="text-xl font-bold text-white mt-10 mb-4">Visual Formatting Guidelines</h3>

      <div className="grid sm:grid-cols-2 gap-4">
        <Card title="Do Use" icon="✅" accentColor="emerald">
          <ul className="space-y-2 list-disc list-inside">
            <li>Highlighted callout boxes for critical info</li>
            <li>Comparison tables (with definitions)</li>
            <li>&ldquo;Why it matters for YOUR project&rdquo; sections</li>
            <li>Icons/emoji sparingly for section IDs</li>
          </ul>
        </Card>
        <Card title="Keep Minimal" icon="⚖️" accentColor="amber">
          <ul className="space-y-2 list-disc list-inside">
            <li>Code examples — only when they directly illustrate a point</li>
            <li>Long explanations without project context</li>
            <li>Jargon without definitions</li>
            <li>Comparisons without explaining what&apos;s being compared</li>
          </ul>
        </Card>
      </div>

      <Callout type="recommendation" title="The Golden Rule">
        <p>
          After every technical explanation, ask: <strong className="text-white">&ldquo;Would Katie understand why this matters for her project?&rdquo;</strong> If no, add context until the answer is yes.
        </p>
      </Callout>
    </section>
  );
}

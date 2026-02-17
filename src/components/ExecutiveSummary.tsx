import SectionHeader from "./SectionHeader";
import Callout from "./Callout";
import Card from "./Card";

export default function ExecutiveSummary() {
  return (
    <section id="executive-summary">
      <SectionHeader
        title="Executive Summary"
        subtitle="After analyzing Notion, Linear, Asana, Basecamp, ClickUp, Monday.com, Trello, and dozens of UX research sources."
      />

      <Callout type="key" title="The Single Most Important Insight">
        <p className="text-base font-medium text-white">
          The best project hub is one that answers &ldquo;What do I do next?&rdquo; in under 3 seconds.
        </p>
        <p className="mt-2">
          Everything else — research, history, links, notes — exists to support that moment of clarity.
        </p>
      </Callout>

      <p className="text-[#c2c2d6] leading-relaxed mb-6">
        The tools people actually stick with (Linear, Notion, Basecamp) share three traits:
      </p>

      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <Card title="Low Friction to Update" icon="⚡" accentColor="blue">
          Checking a task or adding a note is near-instant. No forms, no modals, no friction.
        </Card>
        <Card title="Clear Visual Hierarchy" icon="👁️" accentColor="purple">
          The most important thing is visually obvious. You never have to hunt for what matters.
        </Card>
        <Card title="Opinionated Structure" icon="🏛️" accentColor="emerald">
          They don&apos;t make you design the system from scratch. Every project looks the same.
        </Card>
      </div>

      <Callout type="recommendation" title="Recommendation">
        <p>
          For Katie & Chad&apos;s Command Center, build a <strong className="text-emerald-300">&ldquo;Notion-meets-Linear&rdquo; project hub</strong> with 
          Basecamp-inspired progress tracking, purpose-built for a 2-person team with an AI collaborator (Atlas).
        </p>
      </Callout>
    </section>
  );
}

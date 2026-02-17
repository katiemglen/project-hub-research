import SectionHeader from "./SectionHeader";
import Callout from "./Callout";
import Card from "./Card";
import CodeBlock from "./CodeBlock";

export default function TechnicalArchitecture() {
  return (
    <section id="technical-architecture">
      <SectionHeader
        number="Section 6"
        title="Technical Architecture for Convex"
        subtitle="Schema design, query patterns, real-time subscriptions, and key design decisions — based on extensive research of Convex's documentation."
      />

      {/* Schema */}
      <h3 className="text-lg font-bold text-white mb-4">Schema Design</h3>
      <p className="text-[#c2c2d6] text-sm mb-4">
        The recommended schema for the project hub, covering projects, steps, research docs, links, changelog, and AI suggestions:
      </p>

      <CodeBlock
        language="typescript"
        title="convex/schema.ts"
        code={`import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // ──────────────── Projects ────────────────
  projects: defineTable({
    title: v.string(),
    description: v.string(),
    status: v.union(
      v.literal("active"),
      v.literal("paused"),
      v.literal("completed"),
      v.literal("archived")
    ),
    priority: v.union(
      v.literal("high"),
      v.literal("medium"),
      v.literal("low")
    ),
    overview: v.optional(v.string()),
    icon: v.optional(v.string()),
    color: v.optional(v.string()),
    startDate: v.optional(v.number()),
    targetDate: v.optional(v.number()),
    completedDate: v.optional(v.number()),
    totalSteps: v.number(),
    completedSteps: v.number(),
    hillPosition: v.optional(v.number()),
    createdBy: v.string(),
    updatedAt: v.number(),
  })
    .index("by_status", ["status"])
    .index("by_priority", ["priority", "status"])
    .index("by_updated", ["updatedAt"]),

  // ──────────────── Steps (Tasks) ────────────────
  steps: defineTable({
    projectId: v.id("projects"),
    title: v.string(),
    description: v.optional(v.string()),
    status: v.union(
      v.literal("not_started"),
      v.literal("in_progress"),
      v.literal("blocked"),
      v.literal("done"),
      v.literal("skipped")
    ),
    order: v.number(),
    phase: v.optional(v.string()),
    notes: v.optional(v.string()),
    blockedReason: v.optional(v.string()),
    estimatedMinutes: v.optional(v.number()),
    actualMinutes: v.optional(v.number()),
    suggestedByAtlas: v.boolean(),
    confirmed: v.boolean(),
    createdBy: v.string(),
    completedBy: v.optional(v.string()),
    completedAt: v.optional(v.number()),
    updatedAt: v.number(),
  })
    .index("by_project", ["projectId", "order"])
    .index("by_project_status", ["projectId", "status"])
    .index("by_status_across_projects", ["status", "updatedAt"]),

  // ──────────────── Research Docs ────────────────
  researchDocs: defineTable({
    projectId: v.id("projects"),
    title: v.string(),
    content: v.string(),
    category: v.union(
      v.literal("findings"),
      v.literal("competitive_analysis"),
      v.literal("technical_decision"),
      v.literal("design_reference"),
      v.literal("meeting_notes"),
      v.literal("general")
    ),
    tags: v.array(v.string()),
    relatedStepId: v.optional(v.id("steps")),
    isPinned: v.boolean(),
    createdBy: v.string(),
    updatedAt: v.number(),
  })
    .index("by_project", ["projectId", "updatedAt"])
    .index("by_project_category", ["projectId", "category"])
    .index("by_project_pinned", ["projectId", "isPinned"]),

  // ──────────────── Links ────────────────
  projectLinks: defineTable({
    projectId: v.id("projects"),
    title: v.string(),
    url: v.string(),
    category: v.union(
      v.literal("live_site"),
      v.literal("repository"),
      v.literal("design"),
      v.literal("documentation"),
      v.literal("research"),
      v.literal("other")
    ),
    icon: v.optional(v.string()),
    order: v.number(),
    createdBy: v.string(),
  })
    .index("by_project", ["projectId", "order"]),

  // ──────────────── Changelog ────────────────
  changelog: defineTable({
    projectId: v.id("projects"),
    action: v.union(
      v.literal("step_added"),
      v.literal("step_completed"),
      v.literal("step_updated"),
      v.literal("step_reordered"),
      v.literal("step_skipped"),
      v.literal("step_deleted"),
      v.literal("project_updated"),
      v.literal("research_added"),
      v.literal("link_added"),
      v.literal("status_changed"),
      v.literal("plan_revised"),
      v.literal("note_added")
    ),
    description: v.string(),
    details: v.optional(v.string()),
    stepId: v.optional(v.id("steps")),
    researchDocId: v.optional(v.id("researchDocs")),
    actor: v.string(),
  })
    .index("by_project", ["projectId"])
    .index("by_project_recent", ["projectId", "_creationTime"]),

  // ──────────────── AI Suggestions ────────────────
  suggestions: defineTable({
    projectId: v.id("projects"),
    type: v.union(
      v.literal("add_step"),
      v.literal("reorder_steps"),
      v.literal("modify_step"),
      v.literal("status_update"),
      v.literal("next_action")
    ),
    title: v.string(),
    description: v.string(),
    suggestedStep: v.optional(v.object({
      title: v.string(),
      description: v.optional(v.string()),
      afterStepId: v.optional(v.id("steps")),
      phase: v.optional(v.string()),
    })),
    status: v.union(
      v.literal("pending"),
      v.literal("accepted"),
      v.literal("dismissed")
    ),
    resolvedBy: v.optional(v.string()),
    resolvedAt: v.optional(v.number()),
  })
    .index("by_project_status", ["projectId", "status"]),
});`}
      />

      {/* Key Design Decisions */}
      <h3 className="text-lg font-bold text-white mt-10 mb-4">Key Design Decisions Explained</h3>

      <div className="space-y-4 mb-8">
        <Card title="Separate steps table (not nested in projects)" icon="1️⃣" accentColor="blue">
          <ul className="space-y-1">
            <li>• Querying all &ldquo;in_progress&rdquo; steps across all projects (for &ldquo;My Next Actions&rdquo; dashboard view)</li>
            <li>• Efficient updates to individual steps without loading the entire project</li>
            <li>• Real-time subscriptions per step</li>
          </ul>
        </Card>
        <Card title="order field as a number for sorting" icon="2️⃣" accentColor="purple">
          <p>Using floats (e.g., 1.0, 2.0, 3.0) allows inserting between steps (1.5 goes between 1.0 and 2.0) without rewriting all order values. The <code className="bg-[#242440] px-1 py-0.5 rounded text-xs text-[#60a5fa]">by_project</code> index includes order for efficient sorted queries.</p>
        </Card>
        <Card title="changelog as an append-only table" icon="3️⃣" accentColor="emerald">
          <ul className="space-y-1">
            <li>• Never modified, only inserted into</li>
            <li>• Provides complete audit trail</li>
            <li>• Indexed by projectId + _creationTime for reverse-chronological display</li>
          </ul>
        </Card>
        <Card title="suggestions table for AI suggestions" icon="4️⃣" accentColor="amber">
          <ul className="space-y-1">
            <li>• Separates AI suggestions from confirmed steps</li>
            <li>• Pending suggestions can be displayed in a special UI section</li>
            <li>• Once accepted, a real step is created and the suggestion is marked &ldquo;accepted&rdquo;</li>
          </ul>
        </Card>
        <Card title="Cached progress fields on projects" icon="5️⃣" accentColor="rose">
          <p><code className="bg-[#242440] px-1 py-0.5 rounded text-xs text-[#60a5fa]">totalSteps</code>, <code className="bg-[#242440] px-1 py-0.5 rounded text-xs text-[#60a5fa]">completedSteps</code> — avoids counting steps on every dashboard load. Updated via mutation whenever a step changes status. Trade-off: slight denormalization for much faster dashboard queries.</p>
        </Card>
      </div>

      {/* Query Patterns */}
      <h3 className="text-lg font-bold text-white mt-10 mb-4">Efficient Query Patterns</h3>

      <CodeBlock
        language="typescript"
        title="Query: Get all steps for a project (already sorted)"
        code={`export const getProjectSteps = query({
  args: { projectId: v.id("projects") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("steps")
      .withIndex("by_project", (q) => q.eq("projectId", args.projectId))
      .collect();
    // Returns steps ordered by (projectId, order) — already sorted!
  },
});`}
      />

      <CodeBlock
        language="typescript"
        title="Query: Get next actions across ALL projects (dashboard view)"
        code={`export const getNextActions = query({
  args: {},
  handler: async (ctx) => {
    const inProgressSteps = await ctx.db
      .query("steps")
      .withIndex("by_status_across_projects", (q) => 
        q.eq("status", "in_progress")
      )
      .order("desc")
      .take(10);
    
    // Enrich with project data
    return Promise.all(
      inProgressSteps.map(async (step) => {
        const project = await ctx.db.get(step.projectId);
        return { ...step, projectTitle: project?.title };
      })
    );
  },
});`}
      />

      <CodeBlock
        language="typescript"
        title="Query: Get recent changelog for a project"
        code={`export const getProjectHistory = query({
  args: { projectId: v.id("projects") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("changelog")
      .withIndex("by_project_recent", (q) => 
        q.eq("projectId", args.projectId)
      )
      .order("desc")
      .take(50);
  },
});`}
      />

      {/* Real-Time Subscriptions */}
      <h3 className="text-lg font-bold text-white mt-10 mb-4">Real-Time Updates with Convex Subscriptions</h3>
      <p className="text-[#c2c2d6] text-sm mb-4">
        In the React frontend, every query automatically becomes a real-time subscription:
      </p>

      <CodeBlock
        language="tsx"
        title="Auto-updating component (no WebSocket setup needed)"
        code={`// This automatically updates in real-time when ANY step changes!
function ProjectSteps({ projectId }) {
  const steps = useQuery(api.steps.getProjectSteps, { projectId });
  
  return (
    <div>
      {steps?.map(step => (
        <StepItem key={step._id} step={step} />
      ))}
    </div>
  );
}`}
      />

      <Callout type="insight">
        No WebSocket setup, no polling, no cache invalidation. When Atlas adds a suggestion via a mutation, Katie and Chad see it appear instantly.
      </Callout>

      {/* Rich Text */}
      <h3 className="text-lg font-bold text-white mt-10 mb-4">Rich Text Content</h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <Card title="Option 1: Markdown" icon="📝" accentColor="emerald">
          <p>Simple, works well with <code className="bg-[#242440] px-1 py-0.5 rounded text-xs text-[#60a5fa]">react-markdown</code>. Atlas naturally writes in Markdown. Mature rendering libraries.</p>
        </Card>
        <Card title="Option 2: Structured JSON" icon="🏗️" accentColor="blue">
          <p>TipTap/ProseMirror document format. Better for collaborative editing, but more complex.</p>
        </Card>
      </div>
      <Callout type="recommendation">
        <strong className="text-white">Start with Markdown.</strong> It&apos;s simpler, Atlas already produces it, and rendering libraries are mature. Upgrade to structured editor later if needed.
      </Callout>

      {/* File Storage */}
      <h3 className="text-lg font-bold text-white mt-10 mb-4">File/Document Storage</h3>
      <p className="text-[#c2c2d6] text-sm mb-4">
        Convex has built-in file storage for any type of file — upload images, PDFs, design files. Store reference via <code className="bg-[#242440] px-1.5 py-0.5 rounded text-xs text-[#60a5fa]">storageId</code> in database documents. No separate S3 or CDN needed.
      </p>
      <p className="text-[#9999b3] text-sm">
        Use this for: screenshot references, design mockups, uploaded documents attached to research entries.
      </p>
    </section>
  );
}

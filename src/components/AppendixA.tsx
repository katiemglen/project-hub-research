import SectionHeader from "./SectionHeader";
import ComparisonTable from "./ComparisonTable";

export default function AppendixA() {
  return (
    <section id="appendix-a">
      <SectionHeader
        number="Appendix A"
        title="UX Laws Reference"
        subtitle="Key principles from Laws of UX that should guide the design."
      />

      <ComparisonTable
        columns={[
          { key: "law", header: "Law" },
          { key: "application", header: "Application" },
        ]}
        rows={[
          { law: "Aesthetic-Usability Effect", application: "Make it beautiful — users perceive pretty interfaces as more functional" },
          { law: "Doherty Threshold", application: "Keep interactions under 400ms — productivity soars" },
          { law: "Goal-Gradient Effect", application: "Always show progress — people speed up as they approach the finish" },
          { law: "Hick's Law", application: "Fewer choices = faster decisions. Don't show 10 status options." },
          { law: "Jakob's Law", application: "Make it work like Notion/Linear — users already know those patterns" },
          { law: "Miller's Law", application: "Group steps into chunks of 5-7 (phases/milestones)" },
          { law: "Von Restorff Effect", application: "The \"next action\" should visually stand out from everything else" },
          { law: "Zeigarnik Effect", application: "Show incomplete tasks prominently — they create productive tension" },
          { law: "Tesler's Law", application: "Some complexity is irreducible — don't hide it, manage it gracefully" },
        ]}
      />
    </section>
  );
}

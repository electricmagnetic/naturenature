import Section from "@/components/layout/Section";
import Properties from "@/components/ui/Properties";
import type { TableRow } from "@/types/database";

export default function IndividualDetail({
  individual,
}: {
  individual: TableRow<"individuals">;
}) {
  return (
    <>
      <Section isPrimary>
        <Properties>
          <Properties.Item name="Name">{individual.name}</Properties.Item>
          <Properties.Item name="Reference">
            {individual.reference}
          </Properties.Item>
        </Properties>
      </Section>
    </>
  );
}

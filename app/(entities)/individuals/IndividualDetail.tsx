import Section from "@/components/layout/Section";
import Properties from "@/components/ui/Properties";
import type { TableRow } from "@/types/database";

export default async function IndividualDetail({
  individual,
}: {
  individual: TableRow<"individuals">;
}) {
  return (
    <>
      <Section isPrimary>
        <Properties>
          <Properties.Item name="Name">{individual.name}</Properties.Item>
        </Properties>
      </Section>
    </>
  );
}

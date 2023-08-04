import Section from "@/components/layout/Section";
import Properties from "@/components/ui/Properties";
import type { TableRow } from "@/types/database";

export default async function PersonDetail({
  person,
}: {
  person: TableRow<"people">;
}) {
  return (
    <>
      <Section isPrimary>
        <Properties>
          <Properties.Item name="Name">{person.name}</Properties.Item>
        </Properties>
      </Section>
    </>
  );
}

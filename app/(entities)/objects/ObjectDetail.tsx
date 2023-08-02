import Lookup from "@/components/dictionary/Lookup";
import Section from "@/components/layout/Section";
import Properties from "@/components/ui/Properties";
import type { TableRow } from "@/types/database";

export default async function ObjectDetail({
  object,
}: {
  object: TableRow<"objects">;
}) {
  return (
    <>
      <Section isPrimary>
        <Properties>
          <Properties.Item name="Class">
            <Lookup>{object.class}</Lookup>
          </Properties.Item>
          <Properties.Item name="Type">
            <Lookup>{object.type}</Lookup>
          </Properties.Item>
          <Properties.Item name="Name">{object.name}</Properties.Item>
        </Properties>
      </Section>
    </>
  );
}

import Section from "@/app/_components/layout/Section";
import Properties from "@/app/_components/ui/Properties";
import type { Individual } from "./types";

export default function IndividualDetail({
  individual,
}: {
  individual: Individual;
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

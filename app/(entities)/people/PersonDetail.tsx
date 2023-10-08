import Section from "@/app/_components/layout/Section";
import Properties from "@/app/_components/ui/Properties";
import type { Person } from "./types";

export default function PersonDetail({ person }: { person: Person }) {
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

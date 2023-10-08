import Lookup from "@/app/_components/dictionary/Lookup";
import Section from "@/app/_components/layout/Section";
import Properties from "@/app/_components/ui/Properties";
import type { Object } from "./types";

export default function ObjectDetail({ object }: { object: Object }) {
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

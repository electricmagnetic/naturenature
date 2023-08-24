import Link from "next/link";

import Header from "@/components/layout/Header";
import Section from "@/components/layout/Section";

export default function NotFound() {
  return (
    <main>
      <Header title="Not Found" iconName="dash-circle" />
      <Section>
        <p>Could not find requested resource</p>
        <Link href="/">Home</Link>
      </Section>
    </main>
  );
}

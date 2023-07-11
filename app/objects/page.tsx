import Header from "@/components/layout/Header";

import ObjectsList from "./ObjectsList";

export default function Objects() {
  return (
    <main>
      <Header title="Objects" iconName="box-seam" />
      <ObjectsList />
    </main>
  );
}

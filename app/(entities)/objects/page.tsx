import metadata from "@/app/(entities)/metadata";
import Header from "@/components/layout/Header";

import ObjectsList from "./ObjectsList";

const entityMetadata = metadata.object;

export default function Objects() {
  return (
    <main>
      <Header
        title={entityMetadata.pluralName}
        iconName={entityMetadata.iconName}
      />
      <ObjectsList />
    </main>
  );
}

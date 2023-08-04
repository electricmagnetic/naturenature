import { notFound } from "next/navigation";

import metadata from "@/app/(entities)/metadata";
import Header from "@/components/layout/Header";
import Message from "@/components/ui/Message";

import IndividualForm from "@/app/(entities)/individuals/IndividualForm";
import ObjectForm from "@/app/(entities)/objects/ObjectForm";
import PersonForm from "@/app/(entities)/people/PersonForm";

const EntityForm = ({ entity }: { entity: string }) => {
  switch (entity) {
    case "individual":
      return <IndividualForm />;
    case "object":
      return <ObjectForm />;
    case "person":
      return <PersonForm />;
    default:
      return <Message>Not implemented</Message>;
  }
};

export default async function CreateEntity({
  params: { entity },
}: {
  params: { entity: string };
}) {
  const entityMetadata = metadata[entity];

  if (!entityMetadata) return notFound();

  return (
    <main>
      <Header
        title={`Create ${entityMetadata.name}`}
        iconName={entityMetadata.iconName}
      />
      <EntityForm entity={entity} />
    </main>
  );
}

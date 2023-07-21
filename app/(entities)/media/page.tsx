import metadata from "@/app/(entities)/metadata";
import Header from "@/components/layout/Header";
import ActionButton from "@/components/ui/ActionButton";

import MediaList from "./MediaList";

const entityMetadata = metadata.media;

export default function Medias() {
  return (
    <main>
      <Header
        title={entityMetadata.pluralName}
        iconName={entityMetadata.iconName}
      >
        <ActionButton.Create entity="media" />
      </Header>
      <MediaList />
    </main>
  );
}

import metadata from "@/app/(entities)/metadata";
import Header from "@/components/layout/Header";
import ActionButton from "@/components/ui/ActionButton";

import { getMedia } from "./api";
import MediaList from "./MediaList";

const entityMetadata = metadata.media;

export default async function Medias() {
  const media = await getMedia();

  return (
    <main>
      <Header
        title={entityMetadata.pluralName}
        iconName={entityMetadata.iconName}
      >
        <ActionButton.Create entity="media" />
      </Header>
      <MediaList media={media} />
    </main>
  );
}

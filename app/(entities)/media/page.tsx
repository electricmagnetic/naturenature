import Header from "@/components/layout/Header";
import ActionButton from "@/components/ui/ActionButton";

import { getMedia } from "./api";
import MediaList from "./MediaList";

export default async function Media() {
  const media = await getMedia();

  return (
    <main>
      <Header.Entity entity="media">
        <ActionButton.Create entity="media" />
      </Header.Entity>
      <MediaList media={media} />
    </main>
  );
}

import Header from "@/components/layout/Header";

import { getMedia } from "./api";
import MediaList from "./MediaList";

export default async function Media() {
  const media = await getMedia();

  return (
    <main>
      <Header.Entity entity="media" actionButtons={[Header.Action.Create]} />
      <MediaList media={media} />
    </main>
  );
}

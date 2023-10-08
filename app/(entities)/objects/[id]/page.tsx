import Header from "@/app/_components/layout/Header";

import { getObject } from "../api/server";
import ObjectDetail from "../ObjectDetail";

export default async function Object({
  params: { id },
}: {
  params: { id: string };
}) {
  const object = await getObject(id);

  return (
    <main>
      <Header.Entity
        entity="object"
        action={Header.Action.View}
        id={id}
        actionButtons={[Header.Action.Edit, Header.Action.Delete]}
      />
      <ObjectDetail object={object} />
    </main>
  );
}

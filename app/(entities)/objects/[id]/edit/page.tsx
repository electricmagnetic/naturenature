import Header from "@/app/_components/layout/Header";

import { getObject } from "../../api/server";
import ObjectForm from "../../ObjectForm";

export default async function EditObject({
  params: { id },
}: {
  params: { id: string };
}) {
  const object = await getObject(id);

  return (
    <main>
      <Header.Entity entity="object" action={Header.Action.Edit} id={id} />
      <ObjectForm object={object} />
    </main>
  );
}

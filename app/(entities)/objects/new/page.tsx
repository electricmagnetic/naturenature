import Header from "@/app/_components/layout/Header";

import ObjectForm from "../ObjectForm";

export default function CreateObject() {
  return (
    <main>
      <Header.Entity entity="object" action={Header.Action.Create} />
      <ObjectForm />
    </main>
  );
}

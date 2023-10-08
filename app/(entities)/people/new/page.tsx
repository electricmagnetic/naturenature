import Header from "@/app/_components/layout/Header";

import PersonForm from "../PersonForm";

export default function CreatePerson() {
  return (
    <main>
      <Header.Entity entity="person" action={Header.Action.Create} />
      <PersonForm />
    </main>
  );
}

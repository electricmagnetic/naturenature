import Header from "@/app/_components/layout/Header";

import IndividualForm from "../IndividualForm";

export default function CreateIndividual() {
  return (
    <main>
      <Header.Entity entity="individual" action={Header.Action.Create} />
      <IndividualForm />
    </main>
  );
}

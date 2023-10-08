import Header from "@/app/_components/layout/Header";

import RecordForm from "../RecordForm";

export default function CreateRecord() {
  return (
    <main>
      <Header.Entity entity="record" action={Header.Action.Create} />
      <RecordForm />
    </main>
  );
}

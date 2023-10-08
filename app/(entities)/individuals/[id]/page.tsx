import Header from "@/app/_components/layout/Header";

import RecordBlocks from "@/app/(entities)/records/RecordBlocks";
import { getRecordsBy } from "@/app/(entities)/records/api/server";
import IndividualDetail from "../IndividualDetail";
import { getIndividual } from "../api/server";
import Section from "@/app/_components/layout/Section";
import Message from "@/app/_components/ui/Message";

export default async function Individual({
  params: { id },
}: {
  params: { id: string };
}) {
  const individual = await getIndividual(id);
  const records = await getRecordsBy("individual_id", id);

  return (
    <main>
      <Header.Entity
        entity="individual"
        action={Header.Action.View}
        id={id}
        actionButtons={[Header.Action.Edit, Header.Action.Delete]}
      />
      <IndividualDetail individual={individual} />
      <section>
        <Header.Entity entity="record" />
        {records && records.length > 0 ? (
          <RecordBlocks
            records={records}
            displayProps={{
              showEvent: true,
              showIndividual: false,
              showButtons: false,
            }}
          />
        ) : (
          <Section>
            <Message>No records associated with this individual</Message>
          </Section>
        )}
      </section>
    </main>
  );
}

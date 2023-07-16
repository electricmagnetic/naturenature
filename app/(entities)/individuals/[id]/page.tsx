import Header from "@/components/layout/Header";
import Section from "@/components/layout/Section";
import Toolbar from "@/components/ui/Toolbar";
import {
  EditActionButton,
  DeleteActionButton,
} from "@/components/ui/ActionButton";

import { getIndividual } from "../api";

export default async function Individual({
  params: { id },
}: {
  params: { id: string };
}) {
  const individual = await getIndividual(id);

  return (
    <main>
      <Header title={`Individual: ${individual.id}`}>
        <Toolbar>
          <EditActionButton href={`/individuals/${individual.id}/edit`} />
          <DeleteActionButton href={`/individuals/${individual.id}/delete`} />
        </Toolbar>
      </Header>
      <Section isPrimary>
        <dl className="row row-cols-4 g-2">
          <div>
            <dt>Name</dt>
            <dd>{individual.name}</dd>
          </div>
        </dl>
      </Section>
    </main>
  );
}

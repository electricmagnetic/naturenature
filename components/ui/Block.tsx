import { PropsWithChildren } from "react";
import Card from "./Card";
import ActionButton from "./ActionButton";
import ButtonCollection from "./ButtonCollection";

export default function Block({
  entity,
  id,
  children,
}: PropsWithChildren<{ entity: string; id: string }>) {
  return (
    <Card>
      {children}
      <ButtonCollection>
        <ActionButton.View entity={entity} id={id} />
        <ActionButton.Edit entity={entity} id={id} />
        <ActionButton.Delete entity={entity} id={id} />
      </ButtonCollection>
    </Card>
  );
}

import { PropsWithChildren, createContext } from "react";

type GenericEntity = Record<string, any>; // TODO any

export const CompleteEntityContext = createContext<GenericEntity | null>(null);

export const CompleteEntityProvider = ({
  value,
  children,
}: PropsWithChildren<{ value?: GenericEntity }>) => (
  <CompleteEntityContext.Provider value={value || null}>
    {children}
  </CompleteEntityContext.Provider>
);

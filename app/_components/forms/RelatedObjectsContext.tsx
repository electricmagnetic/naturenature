import { PropsWithChildren, createContext } from "react";

type GenericEntity = Record<string, any>; // TODO any

export const RelatedObjectsContext = createContext<GenericEntity | null>(null);

export const RelatedObjectsProvider = ({
  value,
  children,
}: PropsWithChildren<{ value?: GenericEntity }>) => (
  <RelatedObjectsContext.Provider value={value || null}>
    {children}
  </RelatedObjectsContext.Provider>
);

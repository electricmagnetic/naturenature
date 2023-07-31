import { PropsWithChildren } from "react";

export default function PublicPrivate({ children }: PropsWithChildren) {
  if (typeof children !== "boolean") return null;

  if (children) return <span className="badge text-bg-warning">Public</span>;
  else return <span className="badge text-bg-dark">Private</span>;
}

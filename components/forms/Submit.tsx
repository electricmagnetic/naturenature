import { PropsWithChildren } from "react";

import Loader from "@/components/ui/Loader";

export default function Submit({
  isLoading,
  children,
}: PropsWithChildren<{ isLoading?: boolean }>) {
  return (
    <button type="submit" className="btn btn-primary" disabled={isLoading}>
      {isLoading ? <Loader isButton /> : children}
    </button>
  );
}

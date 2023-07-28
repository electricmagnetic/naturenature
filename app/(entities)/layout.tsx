import { PropsWithChildren } from "react";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

export const dynamic = "force-dynamic";

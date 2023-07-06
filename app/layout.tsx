import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { Database } from "@/types/supabase";

import "./global.scss";

export const metadata = {
  title: process.env.NEXT_PUBLIC_DATABASE_NAME,
  description: "Individual-level biodiversity database",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient<Database>({
    cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <body>
        <Header session={session} />
        <div className="container-fluid">{children}</div>
        <Footer session={session} />
      </body>
    </html>
  );
}

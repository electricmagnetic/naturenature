import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Database } from "@/types/_supabase";

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
    <html lang="en-GB">
      <body>
        <Navbar session={session} />
        <div className="container-fluid">{children}</div>
        <Footer session={session} />
      </body>
    </html>
  );
}

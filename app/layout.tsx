import createServerSupabaseClient from "@/components/helpers/createServerSupabaseClient";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
  const supabase = createServerSupabaseClient();

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

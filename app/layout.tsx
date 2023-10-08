import { Inter, Archivo } from "next/font/google";

import createServerSupabaseClient from "@/app/_components/helpers/createServerSupabaseClient";
import Navbar from "@/app/_components/layout/Navbar";
import Footer from "@/app/_components/layout/Footer";

// Fonts
const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"], // To permit macron use
  display: "swap",
  variable: "--font-inter",
});

// Global stylesheet
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
    <html
      lang={process.env.NEXT_PUBLIC_LOCALE}
      className={`${archivo.variable} ${inter.variable}`}
    >
      <body>
        <Navbar session={session} />
        <div className="container-fluid">{children}</div>
        <Footer session={session} />
      </body>
    </html>
  );
}

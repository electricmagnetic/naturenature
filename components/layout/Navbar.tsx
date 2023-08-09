import Link from "next/link";
import { Session } from "@supabase/auth-helpers-nextjs";

import NavAuthenticated from "./NavAuthenticated";
import NavAnonymous from "./NavAnonymous";

export default function Navbar({ session }: { session: Session | null }) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-secondary mb-3"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand brand" href="/">
          {process.env.NEXT_PUBLIC_DATABASE_NAME}
        </Link>
        {session?.user ? (
          <NavAuthenticated session={session} />
        ) : (
          <NavAnonymous />
        )}
      </div>
    </nav>
  );
}

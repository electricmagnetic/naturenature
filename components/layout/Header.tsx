import Link from "next/link";
import { Session } from "@supabase/auth-helpers-nextjs";

import AuthenticatedNav from "./AuthenticatedNav";
import AnonymousNav from "./AnonymousNav";

export default function Header({ session }: { session: Session | null }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          {process.env.NEXT_PUBLIC_DATABASE_NAME}
        </Link>
        {session?.user ? (
          <AuthenticatedNav session={session} />
        ) : (
          <AnonymousNav />
        )}
      </div>
    </nav>
  );
}

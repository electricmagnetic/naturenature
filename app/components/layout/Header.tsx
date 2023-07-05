import Link from "next/link";
import { Session } from "@supabase/auth-helpers-nextjs";

const AuthenticatedNav = ({ session }: { session: Session }) => {
  return (
    <>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" href="/events">
            Events
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/individuals">
            Individuals
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/account">
            Account
          </Link>
        </li>
      </ul>
    </>
  );
};

const AnonymousNav = () => {
  return <span className="navbar-text">Not logged in</span>;
};

export default async function Header({ session }: { session: Session | null }) {
  if (typeof window !== "undefined") {
    require("bootstrap");
  }

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

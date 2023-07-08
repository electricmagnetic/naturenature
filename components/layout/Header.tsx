import Link from "next/link";
import { Session } from "@supabase/auth-helpers-nextjs";

const AuthenticatedNav = ({ session }: { session: Session }) => {
  return (
    <>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" href="/">
            <i className="bi-house me-2" style={{ width: '1em'}}></i>Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/events">
            <i className="bi-calendar-check me-2" style={{ width: '1em'}}></i>Events
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/individuals">
            <i className="bi-star me-2" style={{ width: '1em'}}></i>Individuals
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/account">
            <i className="bi-person-circle me-2" style={{ width: '1em'}}></i>Account
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

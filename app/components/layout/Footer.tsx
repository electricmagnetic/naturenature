import Link from "next/link";
import { Session } from "@supabase/auth-helpers-nextjs";

const { version } = require("@/package.json");

export default async function Footer({ session }: { session: Session | null }) {
  return (
    <footer className="bg-light py-3 text-center">
      <div className="container-fluid">
        <p className="mb-1">
          NatureNature <small>(v.{version})</small>
        </p>
        <small>
          {session?.user ? (
            <p>
              Logged in as <Link href="/account">{session.user.email}</Link>
            </p>
          ) : (
            <em>Not logged in</em>
          )}
        </small>
      </div>
    </footer>
  );
}

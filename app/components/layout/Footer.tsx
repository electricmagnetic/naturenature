import Link from "next/link";
import { Session } from "@supabase/auth-helpers-nextjs";

const { version } = require("@/package.json");

export default async function Footer({ session }: { session: Session | null }) {
  return (
    <footer>
      <div className="container-fluid">
        <p>NatureNature (v. {version})</p>
        {session?.user ? (
          <p>
            Logged in as <Link href="/account">{session.user.email}</Link>
          </p>
        ) : (
          <p>Not logged in</p>
        )}
      </div>
    </footer>
  );
}

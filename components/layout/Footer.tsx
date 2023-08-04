import Link from "next/link";
import { Session } from "@supabase/auth-helpers-nextjs";

const { name } = require("@/package.json");

export default async function Footer({ session }: { session: Session | null }) {
  return (
    <footer className="bg-light py-3 mt-5 text-center fs-6">
      <div className="container-fluid">
        <p className="footer-brand">{process.env.NEXT_PUBLIC_DATABASE_NAME}</p>
        <p className="mb-0">
          {session?.user && (
            <small>
              Logged in as <Link href="/account">{session.user.email}</Link>
            </small>
          )}
        </p>
        <p className="mb-0">
          <small>
            Powered by {name}
            {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA &&
              ` (${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA})`}
          </small>
        </p>
      </div>
    </footer>
  );
}

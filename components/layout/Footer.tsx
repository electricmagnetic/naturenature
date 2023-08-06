import Link from "next/link";
import { Session } from "@supabase/auth-helpers-nextjs";

const { name } = require("@/package.json");

const Brand = () => (
  <p className="footer-brand mb-0">{process.env.NEXT_PUBLIC_DATABASE_NAME}</p>
);

const PoweredBy = () => (
  <p className="mb-0">
    <small>
      Powered by {name}
      {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA &&
        ` (${process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA})`}
    </small>
  </p>
);

export default async function Footer({ session }: { session: Session | null }) {
  return (
    <footer className="py-3 mt-5 text-center fs-6">
      <Brand />
      {session?.user && (
        <p className="mb-0 mt-3">
          <small>
            Logged in as <Link href="/account">{session.user.email}</Link>
          </small>
        </p>
      )}
      <PoweredBy />
    </footer>
  );
}

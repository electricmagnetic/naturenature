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

const FooterAnonymous = () => (
  <footer className="py-3 mt-5 text-center fs-6">
    <Brand />
    <PoweredBy />
  </footer>
);

const FooterAuthenticated = ({ session }: { session: Session }) => (
  <footer className="bg-light py-3 mt-5 text-center fs-6">
    <Brand />
    <p className="mb-0 mt-3">
      {session?.user && (
        <small>
          Logged in as <Link href="/account">{session.user.email}</Link>
        </small>
      )}
    </p>
    <PoweredBy />
  </footer>
);

export default async function Footer({ session }: { session: Session | null }) {
  return session ? (
    <FooterAuthenticated session={session} />
  ) : (
    <FooterAnonymous />
  );
}

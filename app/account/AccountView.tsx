import { User } from "@supabase/supabase-js";

import Link from "next/link";

import Section from "@/app/components/layout/Section";
import RedirectButton from "./RedirectButton";

export default function AccountView({ user }: { user: User }) {
  return (
    <>
      <main>
        <h1>Account</h1>
        <div className="card mb-3">
          <div className="card-body">
            <Link href="/" className="btn btn-sm btn-light me-2">
              Home
            </Link>
            <RedirectButton />
          </div>
        </div>
        <Section isPrimary>
          <dl className="row row-cols-4 g-2">
            <div>
              <dt>Email</dt>
              <dd>{user.email}</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>{user.role}</dd>
            </div>
            <div>
              <dt>Created at</dt>
              <dd>{user.created_at}</dd>
            </div>
            <div>
              <dt>Last signed in</dt>
              <dd>{user.last_sign_in_at}</dd>
            </div>
          </dl>
        </Section>
        <form action="/auth/logout" method="post">
          <button className="btn btn-primary" role="btn" type="submit">
            Log out
          </button>
        </form>
      </main>
    </>
  );
}

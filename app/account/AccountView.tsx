import { User } from "@supabase/supabase-js";

import Redirector from "./Redirector";
import Section from "@/app/components/layout/Section";

export default function AccountView({ user }: { user: User }) {
  return (
    <>
      <Redirector />
      <main>
        <h1>Account</h1>
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

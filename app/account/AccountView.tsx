import { User } from "@supabase/supabase-js";

import Redirector from "./Redirector";

export default function AccountView({ user }: { user: User }) {
  return (
    <>
      <Redirector />
      <main>
        <h1>Account</h1>
        <span>Logged in as {user.email}</span>
        <dl>
          <dt>Created at</dt>
          <dd>{user.created_at}</dd>
          <dt>Role</dt>
          <dd>{user.role}</dd>
          <dt>Last signed in</dt>
          <dd>{user.last_sign_in_at}</dd>
        </dl>
        <form action="/auth/logout" method="post">
          <button className="btn btn-primary" role="btn" type="submit">
            Log out
          </button>
        </form>
      </main>
    </>
  );
}

import { User } from "@supabase/supabase-js";

export default function AccountView({ user }: { user: User }) {
  return (
    <div className="container-fluid">
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
    </div>
  );
}

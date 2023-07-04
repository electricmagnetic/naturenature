import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@/types/supabase";

export default async function Account() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return <span>Error obtaining user information.</span>;

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
        <button className="button block" type="submit">
          Log out
        </button>
      </form>
    </div>
  );
}

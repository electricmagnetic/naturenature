import { cookies } from "next/headers";
import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@/types/supabase";

export default async function Header() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          NatureNature
        </Link>
        {user ? (
          <span className="navbar-text">{user.email}</span>
        ) : (
          <span className="navbar-text">Not logged in</span>
        )}
      </div>
    </nav>
  );
}

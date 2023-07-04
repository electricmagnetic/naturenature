import { cookies } from "next/headers";
import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@/types/supabase";
const { version } = require("@/package.json");

export default async function Footer() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <footer>
      <div className="container-fluid">
        <p>NatureNature (v. {version})</p>
        {user ? (
          <p>
            Logged in as <Link href="/account">{user.email}</Link>
          </p>
        ) : (
          <p>Not logged in</p>
        )}
      </div>
    </footer>
  );
}

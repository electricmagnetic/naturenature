import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import LoginForm from "./LoginForm";
import AccountView from "./AccountView";

import type { Database } from "@/types/supabase";

export default async function Account() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  //if (error) throw Error(error.message); // TODO check implications of Error catcher
  if (user) return <AccountView user={user} />;
  return <LoginForm />;
}

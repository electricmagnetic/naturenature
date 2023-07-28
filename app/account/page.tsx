import createServerSupabaseClient from "@/components/helpers/createServerSupabaseClient";

import LoginForm from "./LoginForm";
import AccountView from "./AccountView";

export default async function Account() {
  const supabase = createServerSupabaseClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  //if (error) throw Error(error.message); // TODO check implications of Error catcher
  if (user) return <AccountView user={user} />;
  return <LoginForm />;
}

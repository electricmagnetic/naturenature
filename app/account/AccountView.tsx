import { User } from "@supabase/supabase-js";

import Section from "@/components/layout/Section";
import Header from "@/components/layout/Header";
import Toolbar from "@/components/ui/Toolbar";
import RedirectLink from "./RedirectLink";

export default function AccountView({ user }: { user: User }) {
  return (
    <main>
      <Header title="Account">
        <Toolbar>
          <Toolbar.Link href="/" iconName="house">
            Home
          </Toolbar.Link>
          <RedirectLink />
        </Toolbar>
      </Header>
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
  );
}

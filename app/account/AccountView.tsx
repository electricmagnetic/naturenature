import { User } from "@supabase/supabase-js";

import Section from "@/components/layout/Section";
import Header from "@/components/layout/Header";
import Toolbar from "@/components/ui/Toolbar";
import DateTime from "@/components/ui/DateTime";
import ActionButton from "@/components/ui/ActionButton";

import RedirectLinkButton from "./RedirectLinkButton";
import ClearLocalStorageButton from "./ClearLocalStorageButton";

export default function AccountView({ user }: { user: User }) {
  return (
    <main>
      <Header title="Account" iconName="person-circle">
        <Toolbar>
          <ActionButton href="/" iconName="house">
            Home
          </ActionButton>
          <RedirectLinkButton />
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
            <dd>
              <DateTime datetime={user.created_at} />
            </dd>
          </div>
          <div>
            <dt>Last signed in</dt>
            <dd>
              {user.last_sign_in_at ? (
                <DateTime datetime={user.last_sign_in_at} />
              ) : (
                <span>Never</span>
              )}
            </dd>
          </div>
        </dl>
      </Section>
      <Section>
        <div className="row row-cols-auto">
          <div className="col">
            <form action="/auth/logout" method="post">
              <button className="btn btn-primary" role="btn" type="submit">
                Log out
              </button>
            </form>
          </div>
          <div className="col">
            <ClearLocalStorageButton />
          </div>
        </div>
      </Section>
    </main>
  );
}

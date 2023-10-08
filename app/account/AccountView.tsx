import { User } from "@supabase/supabase-js";

import Section from "@/app/_components/layout/Section";
import Header from "@/app/_components/layout/Header";
import Properties from "@/app/_components/ui/Properties";
import DateTime from "@/app/_components/ui/DateTime";
import ActionButton from "@/app/_components/ui/ActionButton";
import ButtonCollection from "@/app/_components/ui/ButtonCollection";

import RedirectLinkButton from "./RedirectLinkButton";
import ClearLocalStorageButton from "./ClearLocalStorageButton";
import RevalidateCacheButton from "./RevalidateCacheButton";

export default function AccountView({ user }: { user: User }) {
  return (
    <main>
      <Header title="Account" iconName="person-circle">
        <ButtonCollection>
          <ActionButton href="/" iconName="house" label="Home" />
          <RedirectLinkButton />
        </ButtonCollection>
      </Header>
      <Section isPrimary>
        <Properties>
          <Properties.Item name="Email">{user.email}</Properties.Item>
          <Properties.Item name="Role">{user.role}</Properties.Item>
          <Properties.Item name="Created at">
            <DateTime datetime={user.created_at} />
          </Properties.Item>
          <Properties.Item name="Last signed in">
            {user.last_sign_in_at ? (
              <DateTime datetime={user.last_sign_in_at} />
            ) : (
              <span>Never</span>
            )}
          </Properties.Item>
        </Properties>
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
          <div className="col">
            <RevalidateCacheButton />
          </div>
        </div>
      </Section>
    </main>
  );
}

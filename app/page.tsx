import Header from "@/components/layout/Header";
import Section from "@/components/layout/Section";
import Icon from "@/components/ui/Icon";
import { entityMetadata, getMetadatum } from "@/app/(entities)/metadata";
import NavLink from "@/components/layout/NavLink";

const EntityPill = ({
  entity,
  plural,
}: {
  entity: string;
  plural?: boolean;
}) => {
  const metadatum = getMetadatum(entity);
  return (
    <span className="badge text-bg-light">
      <Icon iconName={metadatum.iconName} />
      {plural ? metadatum.pluralName : metadatum.name}
    </span>
  );
};

const QuickLinks = () => (
  <Section title="Quick Links">
    <ul className="nav flex-column nav-special">
      {Object.entries(entityMetadata).map(([entity, metadatum]) => (
        <NavLink
          key={entity}
          href={`/${metadatum.table}`}
          iconName={metadatum.iconName}
        >
          {metadatum.pluralName}
        </NavLink>
      ))}
    </ul>
  </Section>
);

const WelcomeSection = () => (
  <Section title="Welcome" isPrimary>
    <p>
      Welcome to{" "}
      <span className="brand">{process.env.NEXT_PUBLIC_DATABASE_NAME}</span>.
      This database is powered by NatureNature, an open source biodiversity
      platform for the management of species at an individual level.
    </p>
    <h3>How does it work?</h3>
    <p>
      Essentially you have <EntityPill entity="individual" plural /> for which
      information can be collected. This is done through the creation of{" "}
      <EntityPill entity="event" plural />, things that happen in a particular{" "}
      <EntityPill entity="place" /> at a particular point in time.
    </p>
    <p>
      Each <EntityPill entity="event" /> contains a set of{" "}
      <EntityPill entity="record" plural />, which can use different protocols
      to describe the action that has taken place. These protocols cover
      different data collection needs, including:
    </p>
    <ul>
      <li>
        the attachment or removal of <EntityPill entity="object" plural /> such
        as transmitters
      </li>
      <li>
        storing <EntityPill entity="media" /> files such as photos
      </li>
      <li>
        the collection of <EntityPill entity="object" plural /> such as samples,
        and the determination of their results
      </li>
      <li>
        the <EntityPill entity="person" plural /> involved in a particular{" "}
        <EntityPill entity="event" />
      </li>
      <li>observations or measurements of characteristics</li>
      <li>
        interventions necessary (e.g. capture of an individual, location
        transfer, medical care)
      </li>
    </ul>
    <p>
      The current state of an <EntityPill entity="individual" /> is obtained
      based on the <EntityPill entity="record" plural /> that are associated
      with it.
    </p>
    <h3>Resources</h3>
    <p>
      <a href="https://github.com/electricmagnetic/naturenature/wiki">
        Documentation
      </a>
      ,{" "}
      <a href="https://github.com/electricmagnetic/naturenature/projects">
        Roadmap
      </a>
      ,{" "}
      <a href="https://github.com/electricmagnetic/naturenature/">
        Source code
      </a>
    </p>
  </Section>
);

export default function Home() {
  return (
    <main>
      <Header title="Home" iconName="house" />
      <div className="row">
        <div className="col-md-10">
          <WelcomeSection />
        </div>
        <div className="col-md-2">
          <QuickLinks />
        </div>
      </div>
    </main>
  );
}

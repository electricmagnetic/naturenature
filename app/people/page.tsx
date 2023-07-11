import Header from "@/components/layout/Header";

import PeopleList from "./PeopleList";

export default function People() {
  return (
    <main>
      <Header title="People" iconName="people" />
      <PeopleList />
    </main>
  );
}

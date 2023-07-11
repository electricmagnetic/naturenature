import Header from "@/components/layout/Header";

import PlacesList from "./PlacesList";

export default function Places() {
  return (
    <main>
      <Header title="Places" iconName="geo-alt" />
      <PlacesList />
    </main>
  );
}

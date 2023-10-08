import NavLink from "./NavLink";

export default function NavAnonymous() {
  return (
    <>
      <ul className="navbar-nav ms-auto">
        <NavLink href="/account" iconName="person-circle">
          Login
        </NavLink>
      </ul>
    </>
  );
}

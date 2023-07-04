const { version } = require("@/package.json");

export default function Footer() {
  return (
    <footer>
      <div className="container-fluid">
        <span>NatureNature (v. {version})</span>
      </div>
    </footer>
  );
}

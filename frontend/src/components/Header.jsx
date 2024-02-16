import Nav from "../components/Nav.jsx";

import "../styles/header.css";

function Header() {
  return (
    <div className="header">
      <Nav />
      <button>Connexion</button>
    </div>
  );
}

export default Header;

import Nav from "./Nav";
import Logo from "./Logo";

import "../styles/headerDesktop.css";

function HeaderDesktop() {
  return (
    <div className="header_desktop">
      <Logo />
      <Nav />
    </div>
  );
}

export default HeaderDesktop;

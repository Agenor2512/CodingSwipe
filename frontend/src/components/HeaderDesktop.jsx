import Nav from "./Nav";
import Logo from "./Logo";
import ModalConnection from "./ModalConnection";

import "../styles/components/headerDesktop.css";

function HeaderDesktop() {
  return (
    <div className="header_desktop">
      <Logo />
      <Nav />
      <ModalConnection />
    </div>
  );
}

export default HeaderDesktop;

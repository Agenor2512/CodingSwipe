import HomePageNav from "./HomePageNav";
import Logo from "./Logo";
import ModalConnection from "./ModalConnection";

import "../styles/components/headerDesktop.css";

function HeaderDesktop() {
  return (
    <div className="header_desktop">
      <Logo />
      <HomePageNav />
      <ModalConnection />
    </div>
  );
}

export default HeaderDesktop;

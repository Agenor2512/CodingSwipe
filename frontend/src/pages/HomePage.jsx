import Logo from "../components/Logo";
import HeaderDesktop from "../components/HeaderDesktop";
import Nav from "../components/Nav";
import RegisterButton from "../components/register/RegisterButton";
import TitlesDescription from "../components/TitlesDescription";
import ModalConnection from "../components/ModalConnection";

import mobileBackground from "../assets/mobile_background.png";

import "../styles/homePage.css";

function HomePage() {
  return (
    <div className="home_page">
      <HeaderDesktop />
      <main>
        <div className="mobile_element">
          <Logo />
        </div>
        <img src={mobileBackground} alt="woman in front of two screens" />
        <TitlesDescription />
        <RegisterButton />
        <div className="mobile_element">
          <ModalConnection />
        </div>
      </main>
      <div className="mobile_element">
        <Nav />
      </div>
    </div>
  );
}

export default HomePage;

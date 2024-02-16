import Logo from "../components/Logo";
import Nav from "../components/Nav";

import "../styles/homePage.css";

import RegisterButton from "../components/register/RegisterButton";

function HomePage() {
  return (
    <>
      <Logo />
      <Nav />
      <RegisterButton />
    </>

  );
}

export default HomePage;

import Logo from "../components/Logo";
import Header from "../components/Header";

import "../styles/homePage.css";

import RegisterButton from "../components/register/RegisterButton";

function HomePage() {
  return (
    <>
      <Logo />
      <Header />
      <RegisterButton />
    </>
  );
}

export default HomePage;

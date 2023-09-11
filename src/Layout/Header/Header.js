import React from "react";
import classes from "./Header.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import Intro from "../../components/Intro/Intro";
import BGIntroDesktop from "../../images/bg-pattern-intro-desktop.svg";
import BGIntroMobile from "../../images/bg-pattern-intro-mobile.svg";
import useMediaQuery from "../../hooks/useMediaQuery";

const Header = () => {
  const media = useMediaQuery("only screen and (max-width:500px)");
  return (
    <header className={classes.header}>
      <img
        src={media ? BGIntroMobile : BGIntroDesktop}
        alt="Background pattern"
        className={classes.header__bg}
      />
      <Navbar />
      <Intro />
    </header>
  );
};

export default Header;

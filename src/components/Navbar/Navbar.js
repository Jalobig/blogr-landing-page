import React, { useState } from "react";
import classes from "./Navbar.module.scss";
import Logo from "../../images/logo.svg";
import IconArrowLight from "../../images/icon-arrow-light.svg";
import IconArrowDark from "../../images/icon-arrow-dark.svg";
import IconHamburger from "../../images/icon-hamburger.svg";
import IconClose from "../../images/icon-close.svg";
import OutsideClickHandler from "react-outside-click-handler";
import CTAButton from "../Buttons/CTAButton/CTAButton";
import useMediaQuery from "../../hooks/useMediaQuery";

const Navbar = () => {
  const media = useMediaQuery("only screen and (max-width:868px)");
  const [isActive, setIsActive] = useState(false);
  const [dropdown, setDropdown] = useState({
    product: false,
    company: false,
    connect: false,
  });
  const removeDropdown = () => {
    setDropdown({
      product: false,
      company: false,
      connect: false,
    });
  };
  const productDropDownHandler = () => {
    setDropdown({
      product: true,
      company: false,
      connect: false,
    });
  };
  const companyDropDownHandler = () => {
    setDropdown({
      product: false,
      company: true,
      connect: false,
    });
  };
  const connectDropDownHandler = () => {
    setDropdown({
      product: false,
      company: false,
      connect: true,
    });
  };
  const menuHandler = () => {
    setIsActive((prevState) => !prevState);
  };
  return (
    <nav className={classes.navbar}>
      <img src={Logo} alt="Logo of Blogr" className={classes.navbar__logo} />
      {media && (
        <img
          src={isActive ? IconClose : IconHamburger}
          alt={`Icon ${isActive ? "close" : "menu"}`}
          className={classes.navbar__menu}
          onClick={menuHandler}
        />
      )}
      {(!media || isActive) && (
        <div className={classes.navbar__row}>
          <ul className={classes.navbar__nav}>
            <li
              className={`${classes["navbar__nav-item"]} ${
                dropdown.product ? classes.active__text : ""
              }`}
              onClick={productDropDownHandler}
            >
              Product{" "}
              <img
                src={media ? IconArrowDark:IconArrowLight}
                alt="Arrow caret"
                className={`${classes.navbar__icon} ${
                  dropdown.product ? classes.active : ""
                }`}
              />
            </li>
            {dropdown.product && (
              <OutsideClickHandler onOutsideClick={removeDropdown}>
                <li
                  className={`${classes.dropdown} ${classes.dropdown__product}`}
                >
                  <ul>
                    <li>Overview</li>
                    <li>Pricing</li>
                    <li>Marketplace</li>
                    <li>Features</li>
                    <li>Integrations</li>
                  </ul>
                </li>
              </OutsideClickHandler>
            )}

            <li
              className={`${classes["navbar__nav-item"]} ${
                dropdown.company ? classes.active__text : ""
              }`}
              onClick={companyDropDownHandler}
            >
              Company{" "}
              <img
                src={media ? IconArrowDark:IconArrowLight}
                alt="Arrow caret"
                className={`${classes.navbar__icon} ${
                  dropdown.company ? classes.active : ""
                }`}
              />
            </li>
            {dropdown.company && (
              <OutsideClickHandler onOutsideClick={removeDropdown}>
                <li
                  className={`${classes.dropdown} ${classes.dropdown__company}`}
                >
                  <ul>
                    <li>About</li>
                    <li>Team</li>
                    <li>Blog</li>
                    <li>Careers</li>
                  </ul>
                </li>
              </OutsideClickHandler>
            )}

            <li
              className={`${classes["navbar__nav-item"]} ${
                dropdown.connect ? classes.active__text : ""
              }`}
              onClick={connectDropDownHandler}
            >
              Connect{" "}
              <img
                src={media ? IconArrowDark:IconArrowLight}
                alt="Arrow caret"
                className={`${classes.navbar__icon} ${
                  dropdown.connect ? classes.active : ""
                }`}
              />
            </li>
            {dropdown.connect && (
              <OutsideClickHandler onOutsideClick={removeDropdown}>
                <li
                  className={`${classes.dropdown} ${classes.dropdown__connect}`}
                >
                  <ul>
                    <li>Contact</li>
                    <li>Newsletter</li>
                    <li>LinkedIn</li>
                  </ul>
                </li>
              </OutsideClickHandler>
            )}
          </ul>
          {media && <hr className={classes.navbar__hr}/>}
          <ul className={classes.navbar__group}>
            <li className={classes["navbar__group--item"]}>Login</li>
            <li>
              <CTAButton className={classes.navbar__button}>Sign Up</CTAButton>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

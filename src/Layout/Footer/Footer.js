import React from "react";
import classes from "./Footer.module.scss";
import Logo from "../../images/logo.svg";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__row}>
        <img src={Logo} alt="Logo of Blogr" className={classes.footer__logo} />
        <div className={classes.footer__column}>
          <h3 className={classes.footer__heading}>Product</h3>
          <ul className={classes.footer__list}>
            <li className={classes["footer__list-item"]}>Overview</li>
            <li className={classes["footer__list-item"]}>Pricing</li>
            <li className={classes["footer__list-item"]}>Marketplace</li>
            <li className={classes["footer__list-item"]}>Features</li>
            <li className={classes["footer__list-item"]}>Integrations</li>
          </ul>
        </div>
        <div className={classes.footer__column}>
          <h3 className={classes.footer__heading}>Company</h3>
          <ul className={classes.footer__list}>
            <li className={classes["footer__list-item"]}>About</li>
            <li className={classes["footer__list-item"]}>Team</li>
            <li className={classes["footer__list-item"]}>Blog</li>
            <li className={classes["footer__list-item"]}>Careers</li>
          </ul>
        </div>
        <div className={classes.footer__column}>
          <h3 className={classes.footer__heading}>Connect</h3>
          <ul className={classes.footer__list}>
            <li className={classes["footer__list-item"]}>Contact</li>
            <li className={classes["footer__list-item"]}>Newsletter</li>
            <li className={classes["footer__list-item"]}>LinkedIn</li>
          </ul>
        </div>
      </div>
      <div className={classes.attribution}>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noreferrer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/Jalobig" rel="noreferrer" target="_blank">
          Jason Alexis
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;

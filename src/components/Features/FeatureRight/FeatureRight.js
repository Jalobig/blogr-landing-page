import React from "react";
import classes from "./FeatureRight.module.scss";
import ImgLaptopDesktop from "../../../images/illustration-laptop-desktop.svg";

const FeatureRight = () => {
  return (
    <div className={classes.feature}>
      <div className={classes.feature__row}>
        <img
          src={ImgLaptopDesktop}
          alt="Laptop Illustration"
          className={classes.feature__bg}
        />
        <div className={classes.feature__column}>
          <h2 className={classes.feature__heading}>Free, open, simple</h2>
          <p className={classes.feature__text}>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
          <h2 className={classes.feature__heading}>Powerful tooling</h2>
          <p className={classes.feature__text}>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureRight;

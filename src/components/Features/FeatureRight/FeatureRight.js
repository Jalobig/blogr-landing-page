import React, { useEffect, useState } from "react";
import classes from "./FeatureRight.module.scss";
import ImgLaptopDesktop from "../../../images/illustration-laptop-desktop.svg";
import ImgLaptopMobile from "../../../images/illustration-laptop-mobile.svg";
import useMediaQuery from "../../../hooks/useMediaQuery";

const FeatureRight = () => {
  const media = useMediaQuery("only screen and (max-width:1148px)");
  const [isVisible, setVisible] = useState(false);

  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setVisible(true));
    });

    observer.observe(domRef.current);

    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div className={classes.feature}>
      <div className={classes.feature__row}>
        <img
          ref={domRef}
          src={media ? ImgLaptopMobile : ImgLaptopDesktop}
          alt="Laptop Illustration"
          className={`${classes.feature__img} ${
            isVisible ? classes["is-visible"] : ""
          }`}
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

import React, { useEffect, useState } from "react";
import classes from "./FeatureAlt.module.scss";
import BGCircle from "../../../images/bg-pattern-circles.svg";
import ImgPhone from "../../../images/illustration-phones.svg";

const FeatureAlt = () => {
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
      <div className={classes.feature__bggroup}>
        <img
          src={BGCircle}
          alt="Background circles"
          className={classes.feature__bgimg}
        />
      </div>
      <div className={classes.feature__row}>
        <img
        ref={domRef}
          src={ImgPhone}
          alt="Mockup of Blogr"
          className={`${classes.feature__img} ${
            isVisible ? classes["is-visible"] : ""
          }`}
        />
        <div className={classes.feature__column}>
          <h1 className={classes.feature__heading}>
            State of the Art Infrastructure
          </h1>
          <p className={classes.feature__text}>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureAlt;

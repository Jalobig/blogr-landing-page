import React from "react";
import classes from "./Main.module.scss";
import FeatureLeft from "../../components/Features/FeatureLeft/FeatureLeft";
import FeatureAlt from "../../components/Features/FeatureAlt/FeatureAlt";
import FeatureRight from "../../components/Features/FeatureRight/FeatureRight";
const Main = () => {
  return (
    <main className={classes.main}>
      <FeatureLeft />
      <FeatureAlt />
      <FeatureRight />
    </main>
  );
};

export default Main;

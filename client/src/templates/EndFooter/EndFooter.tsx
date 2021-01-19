import React from "react";
import { ReactComponent as Branding } from "../../assets/images/icons/walmart-branding.svg";
import Styles from "./EndFooter.module.css";

const EndFooter = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.top}>
        <Branding />
      </div>
      <div className={Styles.bottom}>
        <p>© 2021 Walmart. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export { EndFooter };

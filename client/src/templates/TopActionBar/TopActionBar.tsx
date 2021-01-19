import React from "react";
import { topActionBarLinks } from "../../app/navigation";
import Styles from "./TopActionBar.module.css";

const TopActionBar: React.FC = () => {
  const renderLinks = topActionBarLinks.map((l, index) => (
    <a key={index} href={l.linkTo}>
      {l.display}
    </a>
  ));

  return (
    <div className={Styles.topActionBarWrapper}>
      <div className={Styles.container}>
        <nav className={Styles.links}>{renderLinks}</nav>
      </div>
    </div>
  );
};

export { TopActionBar };

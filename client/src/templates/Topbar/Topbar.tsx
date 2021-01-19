import React from "react";
import { IconLinks } from "../../components/navigation";
import { ReactComponent as Hamburger } from "../../assets/images/icons/hamburger.svg";
import { ReactComponent as FindStore } from "../../assets/images/icons/store-geo.svg";
import { ReactComponent as Branding } from "../../assets/images/icons/walmart-logo.svg";
import { topbarLinks } from "../../app/navigation";
import { site } from "../../app/site";
import Styles from "./Topbar.module.css";

const Topbar: React.FC = () => {
  return (
    <div className={Styles.topbarWrapper}>
      <div className={Styles.hamburgerWrapper}>
        <button>
          <Hamburger />
        </button>
      </div>
      <div className={Styles.pageTitle}>
        <FindStore />
        <span>Store Finder</span>
      </div>
      <div className={Styles.right}>
        <span className={Styles.gradientDecorator1}></span>
        <span className={Styles.gradientDecorator2}></span>
        <nav className={Styles.navigation}>
          <IconLinks links={topbarLinks} />
        </nav>
        <div className={Styles.branding}>
          <a href={site.branding.url}>
            <Branding />
          </a>
        </div>
      </div>
    </div>
  );
};

export { Topbar };

import React from "react";
import { IconLink } from "../../../common/types";
import Styles from "./IconLinks.module.css";

interface IconLinksProps {
  links: Array<IconLink>;
}

const IconLinks: React.FC<IconLinksProps> = ({ links }) => {
  const mockNotification = { notifications: "2", target: "store" };

  return (
    <ul className={Styles.iconLinks}>
      {links.map((l, index: number) => (
        <li key={index} className={Styles.iconLinkItem}>
          <a href={l.linkTo}>
            <l.icon />
            {mockNotification.target === l.name && (
              <span className={Styles.iconLinkItemNotification}>
                {mockNotification.notifications}
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};

export { IconLinks };

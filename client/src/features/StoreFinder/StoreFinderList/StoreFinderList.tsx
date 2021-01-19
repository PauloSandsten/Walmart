import React from "react";
import { Store } from "../../../common/types";
import { ReactComponent as HomeCircle } from "../../../assets/images/icons/home-circle.svg";
import { ReactComponent as Call } from "../../../assets/images/icons/call.svg";
import { ReactComponent as Directions } from "../../../assets/images/icons/directions.svg";
import Styles from "./StoreFinderList.module.css";
interface StoreFinderListProps {
  stores: Array<Store>;
}

const StoreFinderList: React.FC<StoreFinderListProps> = ({ stores }) => {
  const renderIsOpen = (store: Store) => {
    if (store.openNow) {
      return <span className={Styles.isOpen}>Open</span>;
    }
    return <span className={Styles.isClosed}>Closed</span>;
  };

  const renderOpenHours = (store: Store) => {
    if (!store.openNow && !store?.operationalHours?.tomorrowHrs?.startHr) {
      return `Opens tomorrow: ${
        store?.operationalHours?.tomorrowHrs?.startHr ?? "information missing"
      }`;
    }
    return `Open hours: ${store?.operationalHours?.tomorrowHrs?.startHr} - ${store?.operationalHours?.tomorrowHrs?.endHr}`;
  };

  const renderStoreListItems = stores.map((s, index) => (
    <li key={index} className={Styles.listItem}>
      <article className={Styles.listArticle}>
        <div className={Styles.left}>
          <HomeCircle />
        </div>
        <div className={Styles.right}>
          <div>
            <h2 className={Styles.displayName}>{s.displayName}</h2>
            <p className={Styles.storeMeta}>
              {renderIsOpen(s)} | {renderOpenHours(s)}
            </p>
            <p className={Styles.storeAddress}>{s.address?.address}</p>
            <p
              className={Styles.storeCityStateZip}
            >{`${s.address?.city} ${s.address?.state} ${s.address?.postalCode}`}</p>
          </div>
          <div className={Styles.storePrimaryActions}>
            <button className={Styles.roundActionButtons}>
              <Call />
            </button>
            <button className={Styles.roundActionButtons}>
              <Directions />
            </button>
          </div>
        </div>
      </article>
    </li>
  ));

  return (
    <>
      {stores && (
        <>
          <p className={Styles.resultText}>
            We found the following stores for you
          </p>
          <ul>{renderStoreListItems}</ul>
        </>
      )}
    </>
  );
};

export { StoreFinderList };

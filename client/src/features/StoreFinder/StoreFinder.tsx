import React from "react";
import { useFetch } from "../../hooks";
import { StoreFinderForm } from "./StoreFinderForm/StoreFinderForm";
import { StoreFinderList } from "./StoreFinderList/StoreFinderList";
import { ReactComponent as Spark } from "../../assets/images/icons/spark-yellow-partial.svg";
import Styles from "./StoreFinder.module.css";
import { api } from "../../app/api";

const StoreFinder = () => {
  /**
   * For the coding challange, we mock the user as we don't have
   * a login system implemented.
   */
  const user = { firstName: "Paulo" };
  /**
   * We actually store the search results in the local state from the hook
   * instead of Redux as we don't want the user to see a populated list if
   * we actually used a router.
   */
  const stores = useFetch(api.stores.url, {});
  console.log(stores);

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.headingAndSubHeadingWrapper}>
        <header className={Styles.headingWrapper}>
          <h1 className={Styles.heading}>Walmart Store Finder</h1>
          <Spark />
        </header>
        <p className={Styles.subHeading}>
          Welcome, {user.firstName}. Let's find your store!
        </p>
      </div>
      <div className={Styles.formWrapper}>
        <StoreFinderForm />
      </div>
      <div className={Styles.listWrapper}>
        {!stores.response && <div>Loading...</div>}
        {stores.response && <StoreFinderList stores={stores.response || []} />}
      </div>
    </div>
  );
};

export { StoreFinder };

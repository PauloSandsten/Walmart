import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as Search } from "../../../assets/images/icons/search.svg";
import { selectQueryHistory } from "./queryHistorySlice";
import { add } from "./queryHistorySlice";
import Styles from "./StoreFinderForm.module.css";

const StoreFinderForm = () => {
  const [value, setValue] = useState("");
  const history = useSelector(selectQueryHistory);
  const dispatch = useDispatch();

  const renderSearchHistory = history.map((h, index) => {
    if (index === history.length - 1) return `${h}`;
    return `${h}, `;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValue("");
    dispatch(add(value));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <form className={Styles.form} onSubmit={handleSubmit}>
        <input
          className={Styles.input}
          type="text"
          placeholder="Enter a zip code, or city, state."
          onChange={handleChange}
          value={value}
        />
        <button className={Styles.searchButton}>
          <Search />
        </button>
      </form>
      <p className={Styles.history}>
        Previously searched for:{" "}
        <span className={Styles.historyQueries}>{renderSearchHistory}</span>
      </p>
    </>
  );
};

export { StoreFinderForm };

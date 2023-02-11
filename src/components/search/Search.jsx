import React from "react";
import styles from "./Search.module.scss";
import { useContext } from "react";
import { SearchContext } from "../../App";
const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  return (
    <div>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.root}
        type="text"
        placeholder="Поиск"
      />
    </div>
  );
};

export default Search;
//

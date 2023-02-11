import { React, useState, useEffect, useContext } from "react";
import ReactPaginate from "react-paginate";

import Categories from "../Categories";
import Sort from "../Sort";
import Card from "../card/Card";
import Skeleton from "../card/Skeleton";
import Pagination from "../pagination/Pagination";
import { SearchContext } from "../../App";

const Home = () => {
  const [items, setItems] = useState([]);
  const [skeletonLoading, setSkeletonLoading] = useState(true);
  const [categoryID, setCategoryID] = useState("");
  const [sortType, setSortType] = useState({
    name: "популярности",
    sortProperty: "rating",
  });
  const { searchValue } = useContext(SearchContext);
  const [currentPage, setCurrentPage] = useState(1);
  const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
  const sortBy = sortType.sortProperty.replace("-", " ");
  const category = categoryID > 0 ? `category=${categoryID}` : "";
  useEffect(() => {
    setSkeletonLoading(true);
    fetch(
      `https://63e3ba61c919fe386c0d7fe5.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setSkeletonLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryID, sortType, searchValue, currentPage]);

  const pizzas = items.map((item) => <Card key={item.id} {...item} />);
  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const search = searchValue ? `&search=${searchValue}` : "";
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories
            value={categoryID}
            onClickCategory={(i) => setCategoryID(i)}
          />
          <Sort value={sortType} onClickSort={(i) => setSortType(i)} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {skeletonLoading ? skeletons : pizzas}
        </div>
        <Pagination
          onPageChange={(currentPage) => setCurrentPage(currentPage)}
        />
      </div>
    </>
  );
};

export default Home;

import { useState } from "react";
import "./MenuFilters.css";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import SortFilter from "./SortFilter";
import RatingsFilter from "./RatingsFilter";
const MenuFilters = () => {
  const [filter, setFilter] = useState();
  const filterChangeHandler = (filters) => {
    const selectedFilters = {
      ...filters,
    };
    // setFilter((prev) => {
    //   return { ...prev, filters };
    // });
    console.log(filters);
  };
  return (
    <div className="menu-filter-conatiner">
      <PriceFilter filterValues={filterChangeHandler} />
      <CategoryFilter filterValues={filterChangeHandler} />
      <SortFilter filterValues={filterChangeHandler} />
      <RatingsFilter filterValues={filterChangeHandler} />
    </div>
  );
};
export default MenuFilters;

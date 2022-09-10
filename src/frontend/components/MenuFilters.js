import { useState } from "react";
import "./MenuFilters.css";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import SortFilter from "./SortFilter";
import RatingsFilter from "./RatingsFilter";

const MenuFilters = () => {
  return (
    <div className="menu-filter-conatiner">
      <PriceFilter />
      <CategoryFilter />
      <SortFilter />
      <RatingsFilter />
    </div>
  );
};
export default MenuFilters;

import { useContext, useState, createContext } from "react";

const defaultFilterValue = {};
const FilterContext = createContext(defaultFilterValue);

const FilterProvider = ({ children }) => {
  const [sortFilter, setSortFilter] = useState({});
  const sortFilterHandler = (e) => {
    const filters = {
      [e.target.id]: true,
    };
    console.log(filters);
    setSortFilter(filters);
  };
  return (
    <FilterContext.Provider value={{ sortFilter, sortFilterHandler }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => {
  return useContext(FilterContext);
};
export { FilterProvider, useFilter };

import Accordion from "../common/Accordion";
import Filter from "../common/Filter";
import { useFilter } from "../context/filter-context";

const SortFilter = () => {
  const { sortFilterHandler } = useFilter();
  const filterList = [
    // {
    //   id: 1,
    //   type: "radio",
    //   label: "Discount",
    //   name: "sort",
    //   onChange: sortFilterHandler,
    // },
    // {
    //   id: 1,
    //   type: "radio",
    //   label: "BestSellers",
    //   name: "sort",
    //   onChange: sortFilterHandler,
    // },
    {
      id: 1,
      type: "radio",
      label: "Low to High",
      name: "sort",
      onChange: sortFilterHandler,
    },
    {
      id: 2,
      type: "radio",
      label: "High to Low",
      name: "sort",
      onChange: sortFilterHandler,
    },
  ];
  return (
    <div>
      <Accordion title="Sort" content={<Filter List={filterList} />} />
    </div>
  );
};
export default SortFilter;

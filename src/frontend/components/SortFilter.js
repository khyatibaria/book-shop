import Accordion from "../common/Accordion";
import Filter from "../common/Filter";

const SortFilter = ({ filterValues }) => {
  const sortFilterHandler = (e) => {
    const filters = {
      [e.target.id]: true,
    };
    filterValues(e);
  };
  const filterList = [
    {
      type: "radio",
      label: "Discount",
      name: "sort",
      onChange: sortFilterHandler,
    },
    {
      type: "radio",
      label: "BestSellers",
      name: "sort",
      onChange: sortFilterHandler,
    },
    {
      type: "radio",
      label: "Low to High",
      name: "sort",
      onChange: sortFilterHandler,
    },
    {
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

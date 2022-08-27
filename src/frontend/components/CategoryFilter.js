import Accordion from "../common/Accordion";
import Filter from "../common/Filter";

const CategoryFilter = ({ filterValues }) => {
  const categoryFilterHandler = (e) => {
    const filters = {
      [e.target.id]: true,
    };
    filterValues(filters);
  };
  const filterList = [
    {
      type: "radio",
      label: "Horror",
      name: "category",
      onChange: categoryFilterHandler,
    },
    {
      type: "radio",
      label: "Self Help",
      name: "category",
      onChange: categoryFilterHandler,
    },
    {
      type: "radio",
      label: "Thriller",
      name: "category",
      onChange: categoryFilterHandler,
    },
    {
      type: "radio",
      label: "Romance",
      name: "category",
      onChange: categoryFilterHandler,
    },
    {
      type: "radio",
      label: "Finance",
      name: "category",
      onChange: categoryFilterHandler,
    },
  ];
  return (
    <div>
      <Accordion title="Genres" content={<Filter List={filterList} />} />
    </div>
  );
};
export default CategoryFilter;

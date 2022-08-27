import "./RatingsFilter.css";
import Accordion from "../common/Accordion";
import Filter from "../common/Filter";
import Rating from "../common/Rating";
const RatingsFilter = ({ filterValues }) => {
  const ratingFilterHandler = (e) => {
    const filters = {
      [e.target.id]: true,
    };
    filterValues(filters);
  };
  const filterList = [
    {
      id: "5",
      label: (
        <div className="rating-container">
          <Rating />
          <Rating />
          <Rating />
          <Rating />
          <Rating />
        </div>
      ),
      name: "ratings",
      onChange: ratingFilterHandler,
    },
    {
      id: "4",
      label: (
        <div className="rating-container">
          <Rating />
          <Rating />
          <Rating />
          <Rating />
        </div>
      ),
      name: "ratings",
      onChange: ratingFilterHandler,
    },
    {
      id: "3",
      label: (
        <div className="rating-container">
          <Rating />
          <Rating />
          <Rating />
        </div>
      ),
      name: "ratings",
      onChange: ratingFilterHandler,
    },
    {
      id: "2",
      label: (
        <div className="rating-container">
          <Rating />
          <Rating />
        </div>
      ),
      name: "ratings",
      onChange: ratingFilterHandler,
    },
    {
      id: "1",
      label: (
        <div className="rating-container">
          <Rating />
        </div>
      ),
      name: "ratings",
      onChange: ratingFilterHandler,
    },
  ];
  return (
    <div>
      <Accordion title="Ratings" content={<Filter List={filterList} />} />
    </div>
  );
};
export default RatingsFilter;

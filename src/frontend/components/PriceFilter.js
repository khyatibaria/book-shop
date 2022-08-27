import "./PriceFilter.css";
import Accordion from "../common/Accordion";
import Button from "../common/Button";
const PriceFilter = () => {
  const priceFilterHandler = (e) => {
    const filter = {
      [e.target.id]: [e.target.value],
    };
    console.log(filter);
  };
  return (
    <Accordion
      title="Price"
      content={
        <div className="price-filter-container">
          <div className="filter-input-labels">
            <label>Min</label>
            <label>Max</label>
          </div>
          <div className="filter-input-container">
            <div>
              <input
                id="min"
                className="price-filter-input"
                // onChange={minChange}
              />
            </div>
            <div>
              <input
                id="max"
                className="price-filter-input"
                //onChange={maxChange}
              />
            </div>
          </div>
          <Button label="Apply" />
        </div>
      }
    />
  );
};
export default PriceFilter;

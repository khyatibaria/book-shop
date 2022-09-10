import CheckBox from "./CheckBox";
import Radio from "./Radio";
import "./Filter.css";
const Filter = (props) => {
  const { List } = props;
  return (
    <div className="filter-container">
      {/* <div className="filter-header">
        <input className="filter-input" />
      </div> */}
      <div className="filter-body">
        {List?.map((item) => {
          if (item.type === "radio") {
            return (
              <div className="filter-item" key={item.id}>
                <Radio
                  id={item.label.toLowerCase()}
                  name={item.name}
                  label={item.label}
                  labelPosition={item.labelPosition}
                  onChange={item.onChange}
                />
              </div>
            );
          } else {
            return (
              <div className="filter-item">
                <CheckBox
                  id={item.id}
                  label={item.label}
                  labelPosition={item.labelPosition}
                  onChange={item.onChange}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
export default Filter;

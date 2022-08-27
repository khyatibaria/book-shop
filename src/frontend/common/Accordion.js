import { useState } from "react";
import "./Accordion.css";
import { images } from "../assets/index";
const Accordion = (props) => {
  const { title, content } = props;
  const { ArrowDowm } = images;
  const [open, setOpen] = useState(false);
  const openAccordionHandler = () => {
    setOpen((prev) => {
      return !prev;
    });
  };
  return (
    <div className="accordion-container">
      <div className="accordion-header">
        <div className="accordion-title">{title}</div>
        <button className="accordion-button" onClick={openAccordionHandler}>
          <img src={ArrowDowm} alt="down-arrow" height="15" width="40" />
        </button>
      </div>
      {open && <div className="accordion-body">{content}</div>}
    </div>
  );
};
export default Accordion;

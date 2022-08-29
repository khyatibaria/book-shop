import "./Summary.css";
import { useNavigate } from "react-router-dom";
const Summary = () => {
  const navigate = useNavigate();
  return (
    <div className="summary-container">
      <div className="summary-head">Summary</div>
      <div className="summary-content">
        <div className="summary-key">Total Amount</div>
        <div className="summary-value">100/-</div>
      </div>
      <div className="summary-content">
        <div className="summary-key">Shipping</div>
        <div className="summary-value">100/-</div>
      </div>
      <hr className="summary-hr" />
      <div className="summary-content">
        <div className="summary-total">Total</div>
        <div className="summary-value">500/-</div>
      </div>
      <div className="summary-footer">
        <button
          className="btn bg-warning"
          style={{ width: "100%" }}
          onClick={() => {
            navigate("/address");
          }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};
export default Summary;

const Toast = (props) => {
  const { message } = props;
  return (
    <div className="toast-container">
      <div className="toast-message">{message}</div>
      <div>
        <button className="toast-close-button">
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};
export default Toast;

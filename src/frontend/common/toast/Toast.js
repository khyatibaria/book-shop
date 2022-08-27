const Toast = (props) => {
  const { message } = props;
  return (
    <div class="toast-container">
      <div class="toast-message">{message}</div>
      <div>
        <button class="toast-close-button">
          <i class="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};
export default Toast;

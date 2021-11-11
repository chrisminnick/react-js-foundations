import ReactDOM from "react-dom";
import "./styles.css";

function Modal(props) {
  return (
    <>
      {props.isOpen &&
        ReactDOM.createPortal(
          <div className="modalOverlay">
            <div className="modalContainer">
              <h1 className="modalTitle">{props.title}</h1>
              <div className="modalContent">{props.children}</div>
            </div>
          </div>,
          document.getElementById("modal")
        )}
    </>
  );
}

export default Modal;

import ReactDOM from "react-dom";
import "./styles.css";

function Modal(props) {
  return (
    <>
      {props.isOpen && (
        <div className="modalOverlay">
          <div className="modalContainer">
            <h1 className="modalTitle">{props.title}</h1>
            <div className="modalContent">{props.children}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;

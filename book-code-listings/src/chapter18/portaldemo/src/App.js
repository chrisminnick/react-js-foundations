import { useState, useRef, useEffect } from "react";
import Modal from "./Modal";
import "./styles.css";

function App() {
  const CSCRef = useRef();
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(() => !isModalOpen);
  };

  useEffect(() => {
    !isModalOpen && CSCRef.current.focus();
  }, [isModalOpen]);

  return (
    <>
      <div style={{ padding: "60px" }}>
        <label>
          Card Security Code:
          <input ref={CSCRef} />
        </label>
        <button onClick={toggleModal}>What's This?</button>

        <Modal title="What is the CSC Code?" isOpen={isModalOpen}>
          <p>
            A credit card security code is the 3-4 digit number that is printed,
            not embossed, on all credit cards. The length and location of a
            credit card’s security code depend on what network the card is on.{" "}
          </p>
          <button onClick={toggleModal}>close modal</button>
        </Modal>
      </div>
    </>
  );
}

export default App;

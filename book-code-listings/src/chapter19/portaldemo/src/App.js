import ReactDOM from 'react-dom';
import {useState,useRef,useEffect} from 'react';
import './styles.css';

function Modal(props){

  return (
  <>    
  {props.isOpen &&
  ReactDOM.createPortal((  
    <div className="modalOverlay">
      <div className="modalContainer">
        <div className="modalContent">
          {props.children}
        </div>
      </div>
    </div>)
  ,document.getElementById('modal'))}
  </>
  )
}

function App() {
  const PasswordRef = useRef()
  const[isModalOpen,setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(()=>!isModalOpen);
  }

  useEffect(() => {
    !isModalOpen && PasswordRef.current.focus()
  }, [isModalOpen]);

  return (
    <>
    <div style={{padding:"60px"}}>
      <label>Choose a Password:<input ref={PasswordRef} /></label>
      <button onClick={toggleModal}>?</button>
      
      <Modal title="Password Requirements" isOpen={isModalOpen}>
        <p>Your password must contain at least 8 characters, an uppercase letter, 
           the name of your pet, your birthday, your child's birthday, the word
           "password" and several sequential numbers.</p>
        <button onClick={toggleModal}>close modal</button>
      </Modal>
    </div>
    </>
  );
}

export default App;

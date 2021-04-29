import {useState,useRef,useEffect} from 'react';
import Modal from './Modal';
import SalesChart from './SalesChart';
import './styles.css';

function App() {
  const textAreaRef = useRef()
  const[isModalOpen,setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(()=>!isModalOpen);
  }

  useEffect(() => {
    setTimeout(()=>{!isModalOpen && textAreaRef.current.focus()},1000)
  }, [isModalOpen]);

  return (
    <>
    <div>
      <textarea ref={textAreaRef} defaultValue="Enter your comments"/>
      <button onClick={toggleModal}>Help</button>
      
      <Modal title="Warning" isOpen={isModalOpen}>
        <p>This Modal is awesome.</p>
        <button onClick={toggleModal}>close modal</button>
      </Modal>
    </div>
    <SalesChart />
    </>
  );
}

export default App;
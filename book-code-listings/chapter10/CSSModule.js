import styles from "./my-component.module.css";

function DisplayMessage(props) {
  return (
    <>
      <p className={styles.redText}>This text is red.</p>
      
    </>
  );
}

export default DisplayMessage;

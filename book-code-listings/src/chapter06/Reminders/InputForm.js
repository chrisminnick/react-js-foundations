function InputForm(props){
  return(
      <form>
        <input value={props.userInput.reminderText} 
               id="reminderText" 
               type="text" 
               placeholder="What do you want to do?" />
        <input value={props.userInput.dueDate}
               id="dueDate" 
               type="date" />
        <button>Add Item</button>
      </form>
  );
}
export default InputForm;
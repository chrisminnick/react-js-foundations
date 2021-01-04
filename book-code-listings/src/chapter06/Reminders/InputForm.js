function InputForm(props){
    return(
        <form>
          <input id="reminderText" type="text" placeholder="What do you want to do?" />
          <input id="dueDate" type="date" />
          <button>Add Item</button>
        </form>
    );
  }
export default InputForm;
  
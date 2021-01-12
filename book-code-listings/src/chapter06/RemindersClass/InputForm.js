import PropTypes from 'prop-types';

function InputForm(props){
    const handleTextChange = (e)=>{
        const newUserInput = {...props.userInput,reminderText:e.target.value}
        props.setUserInput(newUserInput);
      }
    
    const handleDateChange = (e)=>{
        const date = new Date(e.target.value);
        const formattedDate = date.toISOString().substr(0,10);
        const newUserInput = {...props.userInput,dueDate:formattedDate};
        props.setUserInput(newUserInput);
    }
    
    const handleClick = (e)=>{
      e.preventDefault();
      const itemToAdd = {...props.userInput,status:false};
      props.addNewReminder(itemToAdd);
    };
    

    return(
        <form>
            <input value={props.userInput.reminderText} 
                id="reminderText" 
                type="text" 
                placeholder="What do you want to do?" 
                onChange={handleTextChange} />

            <input value={props.userInput.dueDate}
                id="dueDate"
                type="date" 
                onChange={handleDateChange} />

            <button onClick={handleClick}>Add Item</button>
      </form>
  );
}

InputForm.propTypes = {
  userInput: PropTypes.shape({
    reminderText: PropTypes.string,
    dueDate: PropTypes.string
  }),
  setUserInput: PropTypes.func,
  addNewReminder: PropTypes.func
}

const date = new Date();
const formattedDate = date.toISOString().substr(0,10);

InputForm.defaultProps = {
  userInput: {
    reminderText:"",
    dueDate:formattedDate
  }
}

export default InputForm;
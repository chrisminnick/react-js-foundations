import PropTypes from 'prop-types';

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

InputForm.propTypes = {
  userInput: PropTypes.shape({
    reminderText: PropTypes.string,
    dueDate: PropTypes.string
  }),
  setUserInput: PropTypes.func
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
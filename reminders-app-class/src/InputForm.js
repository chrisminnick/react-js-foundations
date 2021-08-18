import {Component} from 'react';
import PropTypes from 'prop-types';

class InputForm extends Component {

  render(){ 

    const handleTextChange=(e)=>{
      const newUserInput = {...this.props.userInput,reminderText:e.target.value}
      this.props.setUserInput(newUserInput);
    }
    
    const handleDateChange=(e)=>{
      const date = new Date(e.target.value);
      const formattedDate = date.toISOString().substr(0,10);
      const newUserInput = {...this.props.userInput,dueDate:formattedDate};
      this.props.setUserInput(newUserInput);
    }
        
    const handleClick=(e)=>{
      e.preventDefault();
      const itemToAdd = {...this.props.userInput,isComplete:false};
      this.props.addNewReminder(itemToAdd);
    }
    return(
          <form>
              <input value={this.props.userInput.reminderText} 
                  id="reminderText" 
                  type="text" 
                  placeholder="What do you want to do?" 
                  onChange={handleTextChange} />
  
              <input value={this.props.userInput.dueDate}
                  id="dueDate"
                  type="date" 
                  onChange={handleDateChange} />
  
              <button onClick={handleClick}>Add Item</button>
        </form>
    );
  }
  
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

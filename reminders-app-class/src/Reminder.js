import PropTypes from 'prop-types';

function Reminder(props){
  function handleChange(){
    props.setIsComplete(!props.isComplete,props.id);
  }
  
  return(
    <div className="item">item: {props.reminderText}
      <span className="due-date">due date: {props.dueDate}</span>
      <span className="is-complete">
          Completed?: <input type="checkbox" 
                         checked={props.isComplete} 
                         onChange={handleChange} /></span>
    </div>
    
    );
  }
  
Reminder.propTypes = {
  reminderText: PropTypes.string,
  dueDate: PropTypes.string,
  isComplete: PropTypes.bool
}

const date = new Date();
const formattedDate = date.toISOString().substr(0,10);

Reminder.defaultProps = {
  reminderText:"No Reminder Set",
  dueDate:formattedDate,
  isComplete: false
}

export default Reminder; 

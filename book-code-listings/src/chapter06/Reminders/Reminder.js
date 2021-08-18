import PropTypes from 'prop-types';

function Reminder(props){
    function handleChange(){
        props.setIsComplete(!props.isComplete,props.id);
    }
    return(
        <div>item: {props.reminderText}&nbsp;due date: {props.dueDate} 
        &nbsp;Completed?: <input type="checkbox" checked={props.isComplete} onChange={handleChange} />
        </div>
    );
  }
  
Reminder.propTypes = {
    itemText: PropTypes.string,
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
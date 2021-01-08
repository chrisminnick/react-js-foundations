import PropTypes from 'prop-types';

function Reminder(props){
    function handleChange(){
        props.setStatus(!props.status,props.id);
    }
    return(
        <div>item: {props.reminderText}&nbsp;due date: {props.dueDate} 
        &nbsp;status: <input type="checkbox" checked={props.status} onChange={handleChange} />
        </div>
    );
  }
  
Reminder.propTypes = {
    itemText: PropTypes.string,
    dueDate: PropTypes.string,
    status: PropTypes.bool
}

const date = new Date();
const formattedDate = date.toISOString().substr(0,10);

Reminder.defaultProps = {
    reminderText:"No Reminder Set",
    dueDate:formattedDate,
    status: false
  }
export default Reminder;
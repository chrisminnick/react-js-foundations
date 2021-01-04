import PropTypes from 'prop-types';

function Reminder(props){
    return(
        <div>item: {props.itemText} due date: {props.dueDate} status: {props.status}</div>
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
    status: 0
  }
export default Reminder;  
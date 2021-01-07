import PropTypes from 'prop-types';
import Reminder from './Reminder';

function RemindersList(props){

  const reminders = props.reminders.map((reminder,index)=>{
    return (<Reminder itemText={reminder.reminderText} 
                      dueDate={reminder.dueDate} 
                      status={reminder.status}
                      id={index}
                      key={index} />);
  });

  return(
      <div>
        {reminders}
      </div>
  );
}

RemindersList.propTypes = {
  reminders: PropTypes.array
}

const date = new Date();
const formattedDate = date.toISOString().substr(0,10);

RemindersList.defaultProps = {
  reminders: [{
    reminderText:"No Reminders Yet",
    dueDate:formattedDate,
    status: false
  }]
}

export default RemindersList;
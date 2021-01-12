import PropTypes from 'prop-types';
import Reminder from './Reminder1';

function RemindersList(props){

  const reminders = props.reminders.map((reminder,index)=>{
    return (<Reminder reminderText={reminder.reminderText} 
              dueDate={reminder.dueDate}
              status={reminder.status} 
              setStatus={props.setStatus}
              id = {index}
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
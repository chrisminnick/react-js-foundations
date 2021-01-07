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
export default RemindersList;

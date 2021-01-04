import Reminder from './Reminder';

function RemindersList(props){
  return(
      <div>
        <Reminder itemText="Pick up Wesley from School" dueDate="2364-01-15" />
        <Reminder itemText="Meeting with Jean-Luc" dueDate="2364-01-29" />
        <Reminder itemText="Holodeck time!" dueDate="2364-06-01" />
      </div>
  );
}
export default RemindersList;

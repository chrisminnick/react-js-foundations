import Reminder from './Reminder';

function RemindersList(props){
  return(
    <div>
      <Reminder itemText="Pick up Wesley" dueDate="2364-01-15" status={false} />
      <Reminder itemText="Meet with Jean-Luc" dueDate="2364-01-29" status={false} />
      <Reminder itemText="Holodeck time!" dueDate="2364-06-01" status={false} />
    </div>
  );
}
export default RemindersList;
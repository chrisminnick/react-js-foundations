function Reminder(props){
  return(
      <div>item: {props.itemText} due date: {props.dueDate} status: {String(props.status)}</div>
  );
}
import {useState} from 'react';
import InputForm from './InputForm';
import FilterSelect from './FilterSelect';
import RemindersList from './RemindersList';

function App(){
  const [reminders,setReminders] = useState([]);
  const [userInput,setUserInput] = useState();
  const [selectedFilter,setSelectedFilter] = useState("all");

  const filteredList = filterList(reminders,selectedFilter);
  console.log("selected filter: " + selectedFilter);

  function setStatus(status,index){
    const newReminders = [ ...reminders.slice(0, index),
                     {...reminders[index],status}, 
                     ...reminders.slice(index+1) ];
    console.log("new status: " + status);
    console.log("index: " + index);
    console.log("new reminder: " + reminders[index]);
    console.log("new reminders list: " + reminders)
    setReminders(newReminders);
  }
  

  function filterList(reminders,selectedFilter){
      console.log("selected filter inside: " + selectedFilter);
      if (selectedFilter === "all"){
          return reminders;
      } else {

      let numberOfDays;

      switch(selectedFilter){
            case "2day":
              numberOfDays = 2;
              break;
            case "1week":
              numberOfDays = 7;
              break;
            case "30days":
              numberOfDays = 30;
              break;
            default:
              numberOfDays = 0;
              break;
      }

      const result = reminders.filter(reminder=>{
          const todaysDate = new Date().toISOString().substr(0,10);
          const now = new Date(todaysDate).getTime();
          const dueDate = new Date(reminder.dueDate).getTime();
          return dueDate < (now + (numberOfDays * 86400000));
      }
      )
      return result;
    }

  }

  return(
      <div>
          <InputForm userInput={userInput} 
                     reminders={reminders} 
                     setUserInput={setUserInput} 
                     setReminders={setReminders}  />
          <FilterSelect selectedFilter={selectedFilter} 
                        setSelectedFilter={setSelectedFilter} />
          <RemindersList reminders={filteredList} setStatus={setStatus}/>
      </div>
  );
}

export default App;

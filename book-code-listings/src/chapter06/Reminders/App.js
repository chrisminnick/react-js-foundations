import {useState} from 'react';
import InputForm from './InputForm';
import FilterSelect from './FilterSelect';
import RemindersList from './RemindersList';

function App(){
  const [reminders,setReminders] = useState([]);
  const [userInput,setUserInput] = useState();
  const [selectedFilter,setSelectedFilter] = useState("all");

  const filteredList = filterList(reminders);
  console.log("selected filter: " + selectedFilter);

  function filterList(reminders,selectedFilter="all"){
      console.log("selected filter: " + selectedFilter);
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
            case "1month":
              numberOfDays = 30;
              break;
            default:
              numberOfDays = 0;
              break;
      }

      const result = reminders.filter(reminder=>{
          const todaysDate = new Date().getTime();
          const dueDate = new Date(reminder.dueDate).getTime();
          console.log("due date: " + dueDate);
          console.log("todaysDate: " + todaysDate);
          console.log("number of days: " + numberOfDays);
          return dueDate < todaysDate + (numberOfDays * 86400);
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
                        handleChange={setSelectedFilter} />
          <RemindersList reminders={filteredList} 
                         selectedFilter={selectedFilter} />
      </div>
  );
}

export default App;

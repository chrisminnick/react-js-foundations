import {useState} from 'react';
import InputForm from './InputForm1';
import FilterSelect from './FilterSelect1';
import RemindersList from './RemindersList1';

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
    setReminders(newReminders);
  }
  

  function filterList(reminders,selectedFilter){
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
        const todayTime = new Date(todaysDate).getTime();
        const dueTime = new Date(reminder.dueDate).getTime();
        return dueTime < (todayTime + (numberOfDays * 86400000));
    });
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

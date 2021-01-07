import {useState} from 'react';
import InputForm from './InputForm';
import FilterSelect from './FilterSelect';
import RemindersList from './RemindersList';

function App(){
  const [reminders,setReminders] = useState();
  const [userInput,setUserInput] = useState();
  const [selectedFilter,setSelectedFilter] = useState("all");

  const addNewReminder = (itemToAdd) => {
    if (reminders===undefined){
      setReminders([itemToAdd]);
    } else {
      setReminders([...reminders,itemToAdd]);
    }
  }  
  
  return(
    <div>
      <InputForm userInput={userInput} 
                 setUserInput={setUserInput}
                 addNewReminder={addNewReminder} />
      <FilterSelect selectedFilter={selectedFilter} 
                    setSelectedFilter={setSelectedFilter} />
      <RemindersList reminders={reminders} />
    </div>
  );
}

export default App;
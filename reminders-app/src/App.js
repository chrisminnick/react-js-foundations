import {useState} from 'react';
import InputForm from './InputForm';
import FilterSelect from './FilterSelect';
import RemindersList from './RemindersList';

function App(){
  const [reminders,setReminders] = useState();
  const [userInput,setUserInput] = useState();
  const [selectedFilter,setSelectedFilter] = useState("all");

  return(
    <div>
      <InputForm userInput={userInput} 
                 reminders={reminders} 
                 setUserInput={setUserInput} 
                 setReminders={setReminders}  />
      <FilterSelect selectedFilter={selectedFilter} 
                    setSelectedFilter={setSelectedFilter} />
      <RemindersList reminders={reminders} />
    </div>
  );
}

export default App;
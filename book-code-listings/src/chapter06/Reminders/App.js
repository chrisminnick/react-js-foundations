import {useState} from 'react';
import InputForm from './InputForm';
import FilterSelect from './FilterSelect';
import RemindersList from './RemindersList';

function App(){
  const [reminders,setReminders] = useState([]);
  const [userInput,setUserInput] = useState({});
  const [selectedFilter,setSelectedFilter] = useState("all");

  return(
      <div>
          <InputForm userInput={userInput} handleChange={setUserInput} />
          <FilterSelect selectedFilter={selectedFilter} 
                        handleChange={setSelectedFilter} />
          <RemindersList reminders={reminders} 
                         selectedFilter={selectedFilter} />
      </div>
  );
}

export default App;

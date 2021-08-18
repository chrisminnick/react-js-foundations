import {Component} from 'react';
import InputForm from './InputForm';
import FilterSelect from './FilterSelect';
import RemindersList from './RemindersList';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      reminders:undefined,
      userInput:undefined,
      selectedFilter:"all"
    }
    this.setUserInput = this.setUserInput.bind(this);
    this.setSelectedFilter = this.setSelectedFilter.bind(this);
    this.addNewReminder = this.addNewReminder.bind(this);
    this.setIsComplete = this.setIsComplete.bind(this);
  }

  setUserInput(newInput){
    this.setState({userInput:newInput});
  }

  setSelectedFilter(newFilter){
    this.setState({selectedFilter:newFilter});
  }
  
  addNewReminder(itemToAdd) {
    if (this.state.reminders===undefined){
      this.setState({reminders:[itemToAdd]});
    } else {
      this.setState((current)=>{
        return (
          {
            reminders:[...current.reminders,itemToAdd]
          }
          )
      });    
    }
  }  
  
  setIsComplete(isComplete,index){
    const newReminders = [ ...this.state.reminders.slice(0, index),
                     {...this.state.reminders[index],isComplete}, 
                     ...this.state.reminders.slice(index+1) ];
    this.setState({reminders:newReminders});
  }

  filterList(reminders,selectedFilter){
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

    const result = this.state.reminders.filter(reminder=>{
        const todaysDate = new Date().toISOString().substr(0,10);
        const todayTime = new Date(todaysDate).getTime();
        const dueTime = new Date(reminder.dueDate).getTime();
        return dueTime < (todayTime + (numberOfDays * 86400000));
    });

    return result;
    }
  }
  render(){
    const filteredList = this.filterList(this.state.reminders,this.state.selectedFilter);

    return(
      <div>
        <InputForm userInput={this.state.userInput} 
                   setUserInput={this.setUserInput}
                   addNewReminder={this.addNewReminder} />
        <FilterSelect selectedFilter={this.state.selectedFilter} 
                      setSelectedFilter={this.setSelectedFilter} />
        <RemindersList reminders={filteredList} setIsComplete={this.setIsComplete} />
      </div>
    );
  }
    
  
  
}

export default App;
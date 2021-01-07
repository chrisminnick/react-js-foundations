function FilterSelect(props){
  return(
      <label htmlFor="filterReminders">Show tasks due: 
      <select id="filterReminders" value={props.selectedFilter}>
        <option value="2day">within 2 Days</option>
        <option value="1week">within 1 Week</option>
        <option value="30days">within 30 Days</option>
        <option value="all">any time</option>
      </select>
      </label>
  );
}
export default FilterSelect;
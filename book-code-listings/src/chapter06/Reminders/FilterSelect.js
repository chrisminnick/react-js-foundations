import PropTypes from 'prop-types';

function FilterSelect(props){
  return(
      <label htmlFor="filterReminders">Show tasks due: 
      <select id="filterReminders" value={props.selectedFilter}>
        <option value="2day">within 2 Days</option>
        <option value="1week">within 1 Week</option>
        <option value="1month">within 1 Month</option>
        <option value="all">any time</option>
      </select>
      </label>
  );
}

FilterSelect.propTypes = {
  selectedFilter: PropTypes.string,
  setSelectedFilter: PropTypes.func
}

FilterSelect.defaultProps = {
  selectedFilter:'all'
}

export default FilterSelect;
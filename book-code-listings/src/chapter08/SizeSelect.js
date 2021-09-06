function SizeSelect(props){
    return(
      <>
      <select name="size" value={props.size} onChange={props.changeSize}>
        <option value="xs">Extra Small</option>
        <option value="sm">Small</option>
        <option vlue="md">Medium</option>
        <option value="lg">Large</option>
        <option value="xl">Extra Large</option>
      </select>
      <pre>
          {`function SizeSelect(props){
    return(
      <select name="size" value={props.size} onChange={props.changeSize}>
        <option value="xs">Extra Small</option>
        <option value="sm">Small</option>
        <option vlue="md">Medium</option>
        <option value="lg">Large</option>
        <option value="xl">Extra Large</option>
      </select>
    );
  }
  
  export default SizeSelect;
  `}
      </pre>
      </>
    );
  }
  
  export default SizeSelect;
  
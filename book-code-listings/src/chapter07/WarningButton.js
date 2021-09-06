function WarningButton(){

    return (
    <>
      <button onClick={()=>{alert('Are you sure?');}}>Don't Click Here</button>
      <pre>
          {`function WarningButton(){

return (
  <button onClick={()=>{alert('Are you sure?');}}>Don't Click Here</button>
);

}

export default WarningButton;    `}
      </pre>
    </>
    );
    
    }
    
export default WarningButton;    
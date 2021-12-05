function WarningButton() {
  return (
    <>
    <div className="listing-result">
      <button
        onClick={() => {
          alert("Are you sure?");
        }}
      >
        Don't Click Here
      </button>
      </div>
      <CodeAndText />

    </>
  );
}

function CodeAndText(){
  return(
    <>
    <pre>
        {`function WarningButton(){

return (
  <button onClick={()=>{alert('Are you sure?');}}>Don't Click Here</button>
);

}

export default WarningButton;    `}
      </pre>
      
      </>
  )
}

export default WarningButton;

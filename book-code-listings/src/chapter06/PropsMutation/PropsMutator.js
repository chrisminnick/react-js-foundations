function PropsMutator(props){
    let myNumber = props.theNumber;
    const changeProp = ()=>{
        myNumber = myNumber + 1; //don't ever do this
        console.log("my number is: " + myNumber);
    }
    return (
        <>
          <h1>My number is: {myNumber}</h1>
          <h1>props.theNumber is: {props.theNumber}</h1>
          <button onClick = {changeProp}>mutate props.theNumber</button><br />
          <button onClick={()=>{props.setTheNumber(props.theNumber + 1)}}>increase the number</button>
        </>
    )
}

export default PropsMutator;
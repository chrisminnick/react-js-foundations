function PropsMutator(props){
    let myNumber = props.theNumber;

    const changeProp = ()=>{
        myNumber = myNumber + 1;
        console.log("my number is: " + myNumber);
    }

    return (
        <>
          <h1>My number is: {myNumber}</h1>
          <h1>props.theNumber is: {props.theNumber}</h1>
          <button onClick = {changeProp}>change myNumber</button><br />
          <button onClick={()=>{props.setTheNumber(props.theNumber + 1)}}>use setTheNumber</button>
        </>
    )
}

export default PropsMutator;
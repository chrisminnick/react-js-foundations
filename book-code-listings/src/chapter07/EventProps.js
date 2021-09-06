function EventProps(){
    const logClick=(e)=>{
        console.dir(e);
    }
    return(
        <>
        <button onClick={logClick}>Click Me</button>
        <pre>
            {`function EventProps(){
    const logClick=(e)=>{
        console.dir(e);
    }
    return(
        <button onClick={logClick}>Click Me</button>
    )
}

export default EventProps;`}
        </pre>
        </>
    )
}

export default EventProps;
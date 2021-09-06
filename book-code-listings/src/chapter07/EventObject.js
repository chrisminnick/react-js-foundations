function LogInput(){
    const logChange=(e)=>{
        console.dir(e);
    }
    return(
        <>
        <input onChange={logChange} />
        <pre>
            {`function LogInput(){
    const logChange=(e)=>{
        console.dir(e);
    }
    return(
        <input onChange={logChange} />
    )
}

export default LogInput;`}
        </pre>
        </>
    )
}

export default LogInput;
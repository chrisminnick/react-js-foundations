function StyledChild(props){
    return (
    <>
    <p className="red">This is testing whether styles cascade. 
    Uncomment the style.css import in the code to see. Visit some of the other 
    examples to see how an imported css file affects an entire application.
    </p>
    <pre>
        {`function StyledChild(props){
    return (<p className="red">This is testing whether styles cascade. 
    Uncomment the style.css import in the code to see. Visit some of the other 
    examples to see how an imported css file affects an entire application.</p>)
}

export default StyledChild;`}
    </pre>
    </>)
}

export default StyledChild;
function EventProps() {
  const logClick = (e) => {
    console.dir(e);
  };
  return (
    <>
    <div className="listing-result">
      <button onClick={logClick}>Click Me</button>
      </div>
      
      
    </>
  );
}

function CodeAndText(){
  return(
    <>
    
      <h1>React's Synthetic Events</h1>
      <p>Over the years, web browsers have developed slightly different ways of handling events. To eliminate these differences, it's common for JavaScript libraries and frameworks to wrap the browser's native events in a cross-browser abstraction layer. React's cross-browser event handling system is call Synthetic Events.</p>
      
      <p>Except for the fact that it works the same in every browser, Synthetic Events works the same as the native browser event handling.</p>
      <p>Open the JavaScript console and click the above button to see the properties of the SyntheticBaseEvent object.</p>
      </>
  )
}
export default EventProps;

function ImmediateInvoke(){
    return(
        <>
        <div>
          {(()=><h1>The Header</h1>)()}
        </div>
        <pre>
{`function ImmediateInvoke(){
    return(
        <div>
          {(()=><h1>The Header</h1>)()}
        </div>
      );
      
}
export default ImmediateInvoke;`}
        </pre>
        </>
      );
      
}
export default ImmediateInvoke;
function TermsOfUse(props){
    return(
        <>
      <textarea value={props.terms} onChange={props.updateTerms} style={{height:"200px",width:"300px"}} />
      <pre>
          {`function TermsOfUse(props){
  return(
    <textarea value={props.terms} onChange={props.updateTerms} />
  );
}

export default TermsOfUse;
`}
      </pre>
      </>
    );
  }
  
  export default TermsOfUse;  
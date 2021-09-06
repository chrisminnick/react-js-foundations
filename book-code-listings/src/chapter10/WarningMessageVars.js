function WarningMessage(props){

    const warningStyle = {color:"red",padding:"6px",backgroundColor:"#000000"};
  
    return (
    <>
      <p style={warningStyle}>
        {props.warningMessage}
      </p>
      <pre>{`function WarningMessage(props){

const warningStyle = {color:"red",padding:"6px",backgroundColor:"#000000"};

return (
  <p style={warningStyle}>
    {props.warningMessage}
  </p>
)
}

export default WarningMessage;
`}</pre>
</>
    )
  }
  
  export default WarningMessage;
  
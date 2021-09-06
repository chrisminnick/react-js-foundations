function SignUpForm(props){

    const handleSubmit = (e)=>{
      e.preventDefault();
      props.commitFormData();
    }
  
    return(
        <>
      <form onSubmit={handleSubmit}>
        <input type="email" value={props.email} onChange={props.setEmail} />
        <button>Sign Up!</button>
      </form>
      <pre>
          {`function SignUpForm(props){

const handleSubmit = (e)=>{
  e.preventDefault();
  props.commitFormData();
}

return(
  <form onSubmit={handleSubmit}>
    <input type="email" value={props.email} onChange={props.setEmail} />
    <button>Sign Up!</button>
  </form>
)
}

export default SignUpForm;  `}
      </pre>
      </>
    )
  }
  
  export default SignUpForm;  
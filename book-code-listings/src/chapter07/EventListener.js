function MyForm(props){
    return (
    <>
      <form onSubmit={props.handleSubmit}>
        <input type="text" id="fullName" />
        <input type="text" id="phoneNumber" />
        <button>Submit</button>
      </form>
    <pre>
        {`function MyForm(props){
    return (
      <form onSubmit={props.handleSubmit}>
        <input type="text" id="fullName" />
        <input type="text" id="phoneNumber" />
        <button>Submit</button>
      </form>
    );
  }
  export default MyForm;`}
    </pre>
    </>
    );
  }
  export default MyForm;
  
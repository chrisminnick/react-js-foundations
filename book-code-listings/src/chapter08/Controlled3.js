import {Component} from 'react';

class SignUp extends Component{

  constructor(props){
    super(props);
    this.state = {
      emailAddress:''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({emailAddress:e.target.value});
  }

  render(){

    return(  
      <>
      <form>
        <label>Enter your email address:
          <input value={this.state.emailAddress} onChange={this.handleChange} type="text" />
        </label>
      </form>
      <p>Your email address: {this.state.emailAddress}</p>
      <pre>
        {`import {Component} from 'react';

class SignUp extends Component{

  constructor(props){
    super(props);
    this.state = {
      emailAddress:''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({emailAddress:e.target.value});
  }

  render(){

    return(  
      <>
      <form>
        <label>Enter your email address:
          <input value={this.state.emailAddress} onChange={this.handleChange} type="text" />
        </label>
      </form>
      <p>Your email address: {this.state.emailAddress}</p>
      </>
    )
  }
}

export default SignUp;
`}
      </pre>
      </>
    )
  }
}

export default SignUp;

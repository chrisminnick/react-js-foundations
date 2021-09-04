import PropTypes from 'prop-types';
import {Component} from 'react';

class WelcomeClass extends Component {

  static propTypes = {
    firstName: PropTypes.string
  }

  render(){
    return(
    <>
    <h1>Welcome, {this.props.firstName}!</h1>
    <pre>
{`import PropTypes from 'prop-types';
import {Component} from 'react';

class WelcomeClass extends Component {

  static propTypes = {
    firstName: PropTypes.string
  }

  render(){
    return(<h1>Welcome, {this.props.firstName}!</h1>);
  }
}

export default WelcomeClass;
`}
    </pre>
    </>);
  }
}

export default WelcomeClass;

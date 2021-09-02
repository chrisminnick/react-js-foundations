
function Listing0102(){
  return (
<pre>
{`class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { personName:'Murray' };
  }

  render() {
    return React.createElement('h1', null, 'Hello, ' + this.state.personName);
  }
}

const domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(HelloWorld), domContainer);`}
</pre>
  )
}

export default Listing0102;



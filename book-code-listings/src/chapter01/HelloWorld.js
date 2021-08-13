'use strict';

class HelloWorld extends React.Component {
constructor(props) {
    super(props);
    this.state = { personName:'World' };
}

render() {
    return React.createElement('h1', null, 'Hello, ' + this.state.personName);
}
}

const domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(HelloWorld), domContainer);

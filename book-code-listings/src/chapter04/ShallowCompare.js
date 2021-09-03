import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class ShallowCompare extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <>
      <div>foo</div>
      <pre>
{`import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class ShallowCompare extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return <div>foo</div>;
  }
}

export default ShallowCompare;
`}
      </pre>
      </>);
  }
}

export default ShallowCompare;

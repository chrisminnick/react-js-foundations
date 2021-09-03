import React from 'react';

class PureComponentExample extends React.PureComponent {
    render() {
      return (
      <>
      <div>foo</div>
      <pre>
{`import React from 'react';

class PureComponentExample extends React.PureComponent {
    render() {
      return <div>foo</div>;
    }
}

export default PureComponentExample;`}
      </pre>
      </>);
    }
}

export default PureComponentExample
  
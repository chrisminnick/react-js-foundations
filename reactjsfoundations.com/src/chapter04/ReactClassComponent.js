import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>User Profile</h1>
        <SyntaxHighlighter language="javascript" style={github}>
          {`import React from 'react';

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>User Profile</h1>
    );
  }
};

export default UserProfile;`}
        </SyntaxHighlighter>
      </>
    );
  }
}

export default UserProfile;

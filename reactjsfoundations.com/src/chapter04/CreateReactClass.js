import React from 'react';
import createClass from 'create-react-class';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const UserProfile = createClass({
  render() {
    return (
      <>
        <h1>User Profile</h1>
        <SyntaxHighlighter language="javascript" style={github}>
          {`import React from 'react';
import createClass from 'create-react-class';

const UserProfile = createClass({
  render() {
    return (
      <h1>User Profile</h1>
    );
  }
});

export default UserProfile;`}
        </SyntaxHighlighter>
      </>
    );
  },
});

export default UserProfile;

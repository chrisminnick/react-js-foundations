import UsernameInput from './UsernameInput';
import PasswordInput from './PasswordInput';
import LoginSubmit from './LoginSubmit';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export default function LoginForm() {
  return (
    <>
      <form>
        <UsernameInput />
        <PasswordInput />
        <LoginSubmit />
      </form>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import UsernameInput from './UsernameInput';
import PasswordInput from './PasswordInput';
import LoginSubmit from './LoginSubmit';

export default function LoginForm() {
    return (
      <form>
        <UsernameInput />
        <PasswordInput />
        <LoginSubmit />
      </form>
    )
  }
  `}
      </SyntaxHighlighter>
    </>
  );
}

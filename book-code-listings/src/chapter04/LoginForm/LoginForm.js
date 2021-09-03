import UsernameInput from './UsernameInput';
import PasswordInput from './PasswordInput';
import LoginSubmit from './LoginSubmit';

export default function LoginForm() {
    return (
      <>
      <form>
        <UsernameInput />
        <PasswordInput />
        <LoginSubmit />
      </form>
      <pre>
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
      </pre>
      </>
    )
  }
  
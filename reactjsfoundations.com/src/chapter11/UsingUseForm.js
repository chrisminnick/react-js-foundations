import { useForm } from 'react-hook-form';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function SignUpForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name: </label>
        <input
          name="firstname"
          {...register('firstname', { required: true })}
        />

        <label>Last Name: </label>
        <input name="lastname" {...register('lastname', { required: true })} />

        <input type="submit" />
      </form>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useForm} from 'react-hook-form';

function SignUpForm() {
  const {register, handleSubmit} = useForm();
  const onSubmit = data => {
    console.log(data);
  };

return (
  <form onSubmit = {handleSubmit(onSubmit)}>
    <label>First Name: </label>
    <input name="firstname" {...register("firstname",{required:true})} />

    <label>Last Name: </label>
    <input name="lastname" {...register("lastname",{required:true})} />
  
    <input type="submit" />
  </form>
);
}

export default SignUpForm;
`}
      </SyntaxHighlighter>
    </>
  );
}

export default SignUpForm;

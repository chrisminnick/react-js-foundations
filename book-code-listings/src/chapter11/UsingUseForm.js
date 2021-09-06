import {useForm} from 'react-hook-form';

function SignUpForm() {
  const {register, handleSubmit} = useForm();
  const onSubmit = data => {
    console.log(data);
  };

return (
  <>
  <form onSubmit = {handleSubmit(onSubmit)}>
    <label>First Name: </label>
    <input name="firstname" {...register("firstname",{required:true})} />

    <label>Last Name: </label>
    <input name="lastname" {...register("lastname",{required:true})} />
  
    <input type="submit" />
  </form>
  <pre>
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
  </pre>
  </>
);
}

export default SignUpForm;

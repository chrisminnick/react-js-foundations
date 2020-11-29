import React from "react";

function Login(){

	const handleSubmit = (event)=>{
		event.preventDefault();
		// do something else here
	}

	return (
		<form id="login-form" onSubmit="(e)=> {handleSubmit}">
			<input	type="email"
				id="email"
				placeholder="E-Mail Address" />
			<input type="password"
				id="password" />
			<button>Login</button>
		</form>
    );
}

export default Login;
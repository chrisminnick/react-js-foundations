import React from "react";

function Login(){

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(`logging in ${e.target[0].value}`);

		// do something else here

	}

	return (
		<><form id="login-form" onSubmit={handleSubmit}>
			<input	type="email"
				id="email"
				placeholder="E-Mail Address" />
			<input type="password"
				id="password" />
			<button>Login</button>
		</form>
		
		
		<pre>
			{`import React from "react";

function Login(){

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('logging in ' + e.target[0].value);

		// do something else here

	}

	return (
		<form id="login-form" onSubmit={handleSubmit}>
			<input	type="email"
				id="email"
				placeholder="E-Mail Address" />
			<input type="password"
				id="password" />
			<button>Login</button>
		</form>
    );
}

export default Login;`}
		</pre>
		</>
    );
}

export default Login;
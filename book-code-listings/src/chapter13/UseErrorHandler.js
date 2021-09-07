
import React from 'react';
import {useErrorHandler} from 'react-error-boundary';

function fetchGreeting(){
    throw new Error('💥 CABOOM 💥')
}

function Greeting() {
    const [greeting, setGreeting] = React.useState(null)
    const handleError = useErrorHandler()
  
    function handleSubmit(event) {
      event.preventDefault()
      const name = event.target.elements.name.value
      fetchGreeting(name).then(
        newGreeting => setGreeting(newGreeting),
        error => handleError(error),
      )
    }
  
    return greeting ? (
      <div>{greeting}</div>
    ) : (
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input id="name" />
        <button type="submit">get a greeting</button>
      </form>
    )
  }

  export default Greeting;
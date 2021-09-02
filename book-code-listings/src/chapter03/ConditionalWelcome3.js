import Header from './Header';
import Login from './Login';

function Welcome({loggedIn}){
    return(
      <>
      <div>
        {loggedIn?<Header />:<Login />}
      </div>
      <pre>
        {`import Header from './Header';
import Login from './Login';

function Welcome({loggedIn}){
    return(
      <div>
        {loggedIn?<Header />:<Login />}
      </div>
    )
}
  
export default Welcome;`}
      </pre>
      </>
    )
}
  
export default Welcome;
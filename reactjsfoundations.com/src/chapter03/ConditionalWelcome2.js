import Header from "./Header";

function Welcome({ loggedIn }) {
  return (
    <>
      <div className="listing-result">
        {loggedIn && <Header />}
        Note: if you don't see the welcome messsage, you're not logged in.
      </div>
      <CodeAndText />

    </>
  );
}

function CodeAndText() {
  return (
    <pre>
        {`import Header from './Header';

function Welcome({loggedIn}){
    return (
      <div>
        {loggedIn&&<Header />}
        Note: if you don't see the welcome messsage,
        you're not logged in.
      </div>
    )
  }
  
export default Welcome;`}
      </pre>
  )
}
export default Welcome;

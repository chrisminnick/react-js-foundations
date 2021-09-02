import Header from './Header';

function Welcome(){

  let header = <Header />;
  return(
    <>
    <div>
      {header}
    </div>
<pre>
{`import Header from './Header';

function Welcome(){

  let header = <Header />;
  return(
    <div>
      {header}
    </div>
  );
}
export default Welcome;
`}</pre>
    </>
  );
}
export default Welcome;

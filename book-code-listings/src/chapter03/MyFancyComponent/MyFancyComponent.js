import MyFancyWidget from './MyFancyWidget';

function MyFancyComponent(props){
  return(
    <>
    <MyFancyWidget
      widgetSize="huge"
      numberOfColumns="3"
      title="Welcome to My Widget" />
    <pre>
{`import MyFancyWidget from './MyFancyWidget';

function MyFancyComponent(props){
  return(
    <MyFancyWidget
      widgetSize="huge"
      numberOfColumns="3"
      title="Welcome to My Widget" />
  )
}
export default MyFancyComponent;`}</pre>
    </>
  )
}
export default MyFancyComponent;


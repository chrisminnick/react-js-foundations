import ErrorBoundary from './ErrorBoundary';

export default function App(){
    return (
        <>
          <NavBar />
            <ErrorBoundary >
              <Main />
            </ErrorBoundary>
          <Footer />
        </>
    )
}

function NavBar(){
    return (
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    )
}

function Main(props){
    const theGraph = {data:[0,3,5,2]};
    return (
        <p>
            {props.renderTheGraph(theGraph)}
            <button onClick="props.renderTheGraph()">Render Graph</button>
        </p>
    )
}

function Footer(){
    return (
        <p>Copyright &copy; Chris Minnick</p>
    )
}
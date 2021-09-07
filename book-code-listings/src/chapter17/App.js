import { UnitsProvider } from './contexts/UnitsContext';
import Header from './Header';

const App = (props) => {
    return (
        <>
        <UnitsProvider>
            <Header />
        </UnitsProvider>
        <pre>
            {`import { UnitsProvider } from './contexts/UnitsContext';
import Header from './Header';

const App = (props) => {
    return (
        <>
        <UnitsProvider>
            <Header />
        </UnitsProvider>
        
        </>
    )
}

export default App;`}
        </pre>
        </>
    )
}

export default App;
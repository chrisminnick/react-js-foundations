import React from 'react';
import { ThemeContext } from './theme-context'

function App() {
  const { theme } = React.useContext(ThemeContext)
  return (
    <>
      <header
        className="App-header"
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <h1>Welcome to my app.</h1>
      </header>
      <pre>
          {`import React from 'react';
import { ThemeContext } from './theme-context'

function App() {
  const { theme } = React.useContext(ThemeContext)
  return (
    <>
      <header
        className="App-header"
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <h1>Welcome to my app.</h1>
      </header>
    </>
  )
}

export default App;
`}
      </pre>
    </>
  )
}

export default App;

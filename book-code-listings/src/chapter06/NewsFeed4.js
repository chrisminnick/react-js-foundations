import {useState} from 'react'

function NewsFeed4(props) {

const [state] = useState({date:new Date(),headlines:[]});
  
  return(
    <>
      <h1>Headlines for {state.date.toLocaleString()}</h1>
      ...
      <pre>
{`import {useState} from 'react'

function NewsFeed4(props) {

const [state] = useState({date:new Date(),headlines:[]});
  
  return(
    <>
      <h1>Headlines for {state.date.toLocaleString()}</h1>
      ...
    </>
  )
}

export default NewsFeed4;
`}
      </pre>
    </>
  )
}

export default NewsFeed4;

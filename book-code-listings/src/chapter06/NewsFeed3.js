import {useState} from 'react'

function NewsFeed3(props) {

const [date,setDate] = useState(new Date());
const [headlines,setHeadlines] = useState([]);
  
  return(
    <>
      <h1>Headlines for {date.toLocaleString()}</h1>
      ...
      <pre>
{`import {useState} from 'react'

function NewsFeed3(props) {

const [date,setDate] = useState(new Date());
const [headlines,setHeadlines] = useState([]);
  
  return(
    <>
      <h1>Headlines for {date.toLocaleString()}</h1>
      ...
    </>
  )
}

export default NewsFeed3;`}
      </pre>
    </>
  )
}

export default NewsFeed3;
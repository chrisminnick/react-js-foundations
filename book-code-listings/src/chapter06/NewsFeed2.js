import {Component} from 'react'

class NewsFeed2 extends Component {

  state = {
    date: new Date(),
    headlines:[]
  }

  render(){
    return(
      <>
        <h1>Headlines for {this.state.date.toLocaleString()}</h1>
        ...
        <pre>
{`import {Component} from 'react'

class NewsFeed2 extends Component {

  state = {
    date: new Date(),
    headlines:[]
  }

  render(){
    return(
      <>
        <h1>Headlines for {this.state.date.toLocaleString()}</h1>
        ...
      </>
    )
  }
}

export default NewsFeed2;`}
        </pre>
      </>
    )
  }
}

export default NewsFeed2;
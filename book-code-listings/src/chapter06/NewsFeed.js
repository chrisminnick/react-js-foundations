import {Component} from 'react'

class NewsFeed extends Component {

  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      headlines:[]
    }
  }
  render(){
    return(
      <>
        <h1>Headlines for {this.state.date.toLocaleString()}</h1>
        <pre>
{`import {Component} from 'react'

class NewsFeed extends Component {

  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      headlines:[]
    }
  }
  render(){
    return(
      <>
        <h1>Headlines for {this.state.date.toLocaleString()}</h1>
      </>
    )
  }
}

export default NewsFeed;`}
        </pre>
      </>
    )
  }
}

export default NewsFeed;
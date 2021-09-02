import {Component} from 'react';

class BasicFigureProps extends Component {

  render() {
    return(
      <>
      <figure>
        <img style={{width:"150px"}} src={this.props.filename} alt={this.props.caption} />
        <figcaption>{this.props.caption}</figcaption>
      </figure>
      <pre>
{`import {Component} from 'react';

class BasicFigureProps extends Component {

  render() {
    return(
      <figure>
        <img style={{width:"150px"}} src={this.props.filename} alt={this.props.caption} />
        <figcaption>{this.props.caption}</figcaption>
      </figure>
    );
  }
}

export default BasicFigureProps;
`}
      </pre>
      </>
    );
  }
}

export default BasicFigureProps;

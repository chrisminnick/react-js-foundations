import { Component } from 'react';
import { PropTypes } from 'prop-types';
import Person from './Person';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
class FamilyTree extends Component {
  render() {
    return (
      <>
        <div>
          <h1>{this.props.father.firstName}</h1>
        </div>
        <SyntaxHighlighter language="javascript" style={github}>
          {`import {Component} from 'react';
import {PropTypes} from 'prop-types';
import Person from './Person';

class FamilyTree extends Component {
    
    render(){
        return(
            <div><h1>{this.props.father.firstName}</h1>
            </div>
        )
    }
}

FamilyTree.propTypes = {
    father: PropTypes.instanceOf(Person).isRequired,
    pet: PropTypes.elementType
}

export default FamilyTree;`}
        </SyntaxHighlighter>
      </>
    );
  }
}

FamilyTree.propTypes = {
  father: PropTypes.instanceOf(Person).isRequired,
  pet: PropTypes.elementType,
};
FamilyTree.defaultProps = {
  father: new Person(),
};
export default FamilyTree;

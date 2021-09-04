import {Component} from 'react';
import {PropTypes} from 'prop-types';
import Person from './Person';

class FamilyTree extends Component {
    
    render(){
        return(
            <>
            <div><h1>{this.props.father.firstName}</h1>
            </div>
            <pre>
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
            </pre>
            </>
        )
    }
}

FamilyTree.propTypes = {
    father: PropTypes.instanceOf(Person).isRequired,
    pet: PropTypes.elementType
}

export default FamilyTree;
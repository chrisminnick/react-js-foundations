import {Component} from 'react';
import {PropTypes} from 'prop-types';

class FamilyTree extends Component {
    render(){
        return(
            <p>{this.props.father}</p>
        )
    }
}

FamilyTree.propTypes = {
    father: PropTypes.instanceOf(Boolean).isRequired
}

export default FamilyTree;
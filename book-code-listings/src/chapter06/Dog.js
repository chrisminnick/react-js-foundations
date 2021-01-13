import {Component} from 'react';

class Dog extends Component {
    render(){
        return(<p>A Dog: {this.props.firstName}</p>)
    }
}

export default Dog;
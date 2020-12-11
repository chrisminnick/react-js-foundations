import {useState} from 'react';
import PropsMutator from './PropsMutator';

function App(){
    const [theNumber,setTheNumber] = useState(0);
    return (
        <PropsMutator theNumber = {theNumber} setTheNumber = {setTheNumber} />
    )
}

export default App;
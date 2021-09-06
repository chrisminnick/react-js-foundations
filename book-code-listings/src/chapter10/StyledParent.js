import StyledChild from './StyledChild';

//import './style.css';

function StyledParent(props){
    return (
    <>
    <StyledChild />
    <pre>
        {`import StyledChild from './StyledChild';

import './style.css';

function StyledParent(props){
    return (<StyledChild />)
}

export default StyledParent;`}</pre>
</>)
}

export default StyledParent;
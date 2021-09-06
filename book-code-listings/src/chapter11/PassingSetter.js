import {useState} from 'react';

function ButtonContainer(){

  const [count,setCount] = useState(0);

  return (
    <>
      <MyButton count = {count} setCount = {setCount} /><br />
      count value: {count}
      <pre>
        {`import {useState} from 'react';

function ButtonContainer(){

  const [count,setCount] = useState(0);

  return (
    <>
      <MyButton count = {count} setCount = {setCount} /><br />
      count value: {count}
    </>
  );
}

function MyButton(props){
  return (
    <button onClick = {()=>props.setCount(props.count+1)}>
      Add 1 to the Count
    </button>
  );
}

export {ButtonContainer,MyButton};
`}
      </pre>
    </>
  );
}

function MyButton(props){
    
  return (
    <button onClick = {()=>props.setCount(props.count+1)}>
      Add 1 to the Count
    </button>
  );
}

export {ButtonContainer,MyButton};
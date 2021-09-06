import {useState,useRef,useImperativeHandle,forwardRef} from 'react';

const CountingBox = forwardRef((props, ref) => {

    const [text,setText] = useState('');

    useImperativeHandle(ref, () => {
        return {count: text.split(" ").length}
    },[text]);

    return (
    <>
      <textarea value={text} onChange={(e)=>setText(e.target.value)} />
      <pre>
        {`import {useState,useRef,useImperativeHandle,forwardRef} from 'react';

const CountingBox = forwardRef((props, ref) => {

    const [text,setText] = useState('');

    useImperativeHandle(ref, () => {
        return {count: text.split(" ").length}
    },[text]);

    return (
    <>
      <textarea value={text} onChange={(e)=>setText(e.target.value)} />
    </>);
});

function TextEdit(props){

    const countingBoxRef = useRef();
    const [wordCount,setWordCount] = useState(0);

    const handleClick = (count) => {
      setWordCount(count)
    }

    return (
        <>
          <CountingBox ref={countingBoxRef} /><br />
          <button onClick={()=>handleClick(countingBoxRef.current.count)}>count words</button><br />
          current count: {wordCount}<br />
        </>
    )
}

export default TextEdit;
`}
      </pre>
    </>);
});

function TextEdit(props){

    const countingBoxRef = useRef();
    const [wordCount,setWordCount] = useState(0);

    const handleClick = (count) => {
      setWordCount(count)
    }

    return (
        <>
          <CountingBox ref={countingBoxRef} /><br />
          <button onClick={()=>handleClick(countingBoxRef.current.count)}>count words</button><br />
          current count: {wordCount}<br />
        </>
    )
}

export default TextEdit;

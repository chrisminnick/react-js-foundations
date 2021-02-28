import {useState,useRef,useImperativeHandle,forwardRef} from 'react';

const CountingBox = forwardRef((props, ref) => {
    const internalRef = useRef();
    const [wordCount,setWordCount] = useState(0);

    useImperativeHandle(ref, () => ({
        wordCount: wordCount
      }
    ),[wordCount]);

    const countWords = () => {
      const count = internalRef.current.value.split(" ").length
      setWordCount(count);
    }

    return (
    <>
      <textarea ref={internalRef} /><br />
      <button onClick={countWords}>count words</button>
    </>);
});

function TextEdit(props){

    const countingBoxRef = useRef(null);

    return (
        <>
          <CountingBox ref={countingBoxRef}/>
          {countingBoxRef.wordCount} words
        </>
    )
}

export default TextEdit;

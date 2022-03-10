import { useState, useRef } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function BlogComment(props) {
  const [comments, setComments] = useState([]);
  const textAreaRef = useRef(null);
  const recordComment = (e) => {
    e.preventDefault();
    setComments([...comments, textAreaRef.current.value]);
  };

  const commentList = comments.map((comment, index) => {
    return <p key={index}>{comment}</p>;
  });

  return (
    <>
      <form onSubmit={recordComment}>
        <p>Enter your comment:</p>
        <textarea ref={textAreaRef}></textarea>
        <br />
        <button>Submit Comment</button>
        <p>All Comments:</p>
        {commentList}
      </form>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useState,useRef} from 'react';

function BlogComment(props){
    const [comments,setComments] = useState([]);
    const textAreaRef = useRef(null);
    const recordComment = (e)=>{
        e.preventDefault();
        setComments([...comments,textAreaRef.current.value]);
    }
    
    const commentList = comments.map((comment,index)=>{
        return (<p key={index}>{comment}</p>);
    })

    return(
        <>
            <form onSubmit={recordComment}>
            <p>Enter your comment:</p>
            <textarea ref={textAreaRef}></textarea><br />
            <button>Submit Comment</button>
            <p>All Comments:</p>
            {commentList}
            </form>
        </>
    );
}

export default BlogComment;
`}
      </SyntaxHighlighter>
    </>
  );
}

export default BlogComment;

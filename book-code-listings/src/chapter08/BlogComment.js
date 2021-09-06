import {useState,useRef} from 'react';

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
            <pre>
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
            </pre>
        </>
    );
}

export default BlogComment;

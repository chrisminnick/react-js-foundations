//import "style.css";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function ArticleLink(props) {
  return (
    <>
      <div className="article-link">
        <h1 className="title">{props.title}</h1>
        <p className="firstPara">{props.firstPararaph}</p>
        <p>
          <a className="articleLink" href={props.link}>
            read more
          </a>
        </p>
      </div>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import "styles.css";

function ArticleLink(props){

return (

  <div className="article-link">
    <h1 className="title">{props.title}</h1>
    <p className="firstPara">{props.firstPararaph}</p>
    <p><a className="articleLink" href={props.link}>read more</a></p>
  </div>

);
}

export default ArticleLink;`}
      </SyntaxHighlighter>
    </>
  );
}
export default ArticleLink;

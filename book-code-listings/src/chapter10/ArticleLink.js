//import "style.css";

function ArticleLink(props){
return (
<>
  <div className="article-link">
    <h1 className="title">{props.title}</h1>
    <p className="firstPara">{props.firstPararaph}</p>
    <p><a className="articleLink" href={props.link}>read more</a></p>
  </div>
  <pre>
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
  </pre>
  </>

);
}
export default ArticleLink;
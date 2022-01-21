import Helmet from "react-helmet";

function About() {
  return (
    <>
      <Helmet>
        <title>React JS Foundations by Chris Minnick - About the Author</title>
        <meta
          name="description"
          content="Get up to speed on building applications with ReactJS with this
        practical yet very approachable book that will provide you with
        everything you need to understand what React is and how to start
        building applications with it."
        />
      </Helmet>
      <h1>About the Author</h1>
      <div style={{textAlign:"center"}}>
      <img alt="Chris Minnick" src="/images/chris-and-car.jpeg" style={{maxWidth:"100%",height:"auto"}} width="300" height="400" />
      </div>
      <p><a href="https://chrisminnick.com" target="_blank">Chris Minnick</a> has 
        been a full stack developer for over 25 years, and a professional
        author and trainer for 15 years. He has been the lead front-end React
        developer for several startup companies, and has been building web and
        mobile user interfaces with React since 2015. Chris has produced online
        video courses for Pluralsight and O'Reilly Media and is the author of
        over a dozen books including ReactJS Foundations: Building User
        Interfaces with React JS.
      </p>

      <h3>Other Books by Chris Minnick</h3>
      <ul className="inside-links" style={{ listStyleType: "none" }}>
        <li>
          <a href="https://amzn.to/3EdqbLR">
            Coding with JavaScript for Dummies
          </a>
        </li>
        <li>
          <a href="https://amzn.to/3C19kKv">JavaScript For Kids For Dummies</a>
        </li>
        <li>
          <a href="https://amzn.to/392hWEg">
            Beginning HTML5 and CSS3 for Dummies
          </a>
        </li>
        <li>
          <a href="https://amzn.to/3hJpnVJ">Writing Computer Code</a>
        </li>
        <li>
          <a href="https://amzn.to/2XcC1oq">Adventures in Coding</a>
        </li>
        <li>
          <a href="https://amzn.to/2XgOdVy">
            Complete List of Books by Chris Minnick
          </a>
        </li>
      </ul>
    </>
  );
}

export default About;

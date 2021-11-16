import "./About.css";
function About() {
  return (
    <>
      <h3>About the Author</h3>
      <p><img src="/images/chris-and-car.jpeg" 
      alt="Chris Minnick" 
      className="img-thumbnail float-left mr-2"
      width="250" />
        Chris Minnick has been a full stack developer for over 25 years, and a
        professional author and trainer for 15 years. He has been the lead
        front-end React developer for several startup companies, and has been
        building web and mobile user interfaces with React since 2015. Chris has
        produced online video courses for Pluralsight and O'Reilly Media and is
        the author of over a dozen books including React JS Foundations:
        Building User Interfaces with React JS.
      </p>

      <h3>Other Books by Chris Minnick</h3>
      <ul style={{listStyleType:"none"}}>
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

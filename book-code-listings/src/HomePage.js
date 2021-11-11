import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faDownload } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab, faHome, faDownload);

function HomePage() {
  return (
    <>
      <p>
        Here, you'll find all the source code and live demos where possible. You
        can download the examples, report issues, and ask/answer questions in
        the discussion area by visiting the book's{" "}
        <a href="https://github.com/chrisminnick/react-js-foundations">
          github page
        </a>
        .
      </p>
      <span className="navlink">
        <a
          title="download code"
          href="https://github.com/chrisminnick/react-js-foundations/archive/refs/heads/main.zip"
        >
          <FontAwesomeIcon icon={faDownload} /> Download Code
        </a>
      </span>
      <span className="navlink">
        <a
          title="github repo"
          href="https://github.com/chrisminnick/react-js-foundations"
        >
          <FontAwesomeIcon icon={["fab", "github"]} /> Github
        </a>
      </span>
    </>
  );
}

export default HomePage;

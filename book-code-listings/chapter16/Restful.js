import { useState } from "react";

function Restful() {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState();

  const getRepos = function () {
    fetch("https://api.github.com/users/facebook/repos")
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
      })
      .then(setStatus("fetched"))
      .catch((error) => console.error(error));
  };

  const logRepos = function () {
    console.log(repos);
  };

  return (
    <>
      <button onClick={getRepos}>{status ? "Fetched" : "Fetch Repos"}</button>
      <button onClick={logRepos}>Log Repos</button>
      
    </>
  );
}

export default Restful;

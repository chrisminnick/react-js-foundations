import { useState } from "react";
import axios from "axios";

function Restful() {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState();

  const getRepos = function () {
    axios({
      method: "get",
      url: "https://api.github.com/users/facebook/repos",
    })
      .then((resp) => {
        setRepos(resp.data);
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

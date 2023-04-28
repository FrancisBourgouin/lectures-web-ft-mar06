import { useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import RepoForm from "./components/RepoForm";
import CommitList from "./components/CommitList";
import Spy from "./components/Spy";

import "./App.css";

function App() {
  const [commits, setCommits] = useState(null);
  const [spyFound, setSpyFound] = useState(false);

  const toggleSpy = () => setSpyFound(!spyFound);

  const fetchCommits = (params) => {
    const { owner, repo } = params;

    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;

    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setCommits(data));
  };

  return (
    <div className="App">
      <Header />
      <button onClick={toggleSpy}>REPORT SPY!</button>
      {!spyFound && <Spy commits={commits} />}
      <main>
        <RepoForm onSubmit={fetchCommits} />
        {commits && <CommitList commits={commits} />}
      </main>
    </div>
  );
}

export default App;

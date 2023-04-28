import React from "react";
import axios from "axios";

import Header from "./components/Header";
import RepoForm from "./components/RepoForm";
import CommitList from "./components/CommitList";

import "./App.css";
import Spy from "./components/Spy";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <main>
//         <RepoForm onSubmit={}/>
//         <CommitList />
//       </main>
//     </div>
//   );
// }

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      commits: null,
      spyFound: false,
    };
  }

  toggleSpy = () => this.setState({ ...this.state, spyFound: !this.state.spyFound });

  fetchCommits = (params) => {
    const { owner, repo } = params;

    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;

    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => this.setState({ ...this.state, commits: data }));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <button onClick={this.toggleSpy}>REPORT SPY!</button>
        {!this.state.spyFound && <Spy commits={this.state.commits} />}
        <main>
          <RepoForm onSubmit={this.fetchCommits} />
          {this.state.commits && <CommitList commits={this.state.commits} />}
        </main>
      </div>
    );
  }
}

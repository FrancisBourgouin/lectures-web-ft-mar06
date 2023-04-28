import React from "react";

// export default function RepoForm(props) {
//   return (
//     <form className="RepoForm">
//       <input type="text" name="owner" />
//       <input type="text" name="repo" />
//       <button>Fetch the commits!</button>
//     </form>
//   );
// }

export default class RepoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      owner: "",
      repo: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = function (event) {
    event.preventDefault();

    this.setState({
      owner: "",
      repo: "",
    });

    this.props.onSubmit(this.state);
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ ...this.state, [name]: value });

    // const newState = {...this.state}
    // newState[name] = value
    // this.setState(newState)
  };

  render() {
    return (
      <form className="RepoForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="owner"
          onChange={this.handleChange}
          value={this.state.owner}
        />
        <input
          type="text"
          name="repo"
          onChange={this.handleChange}
          value={this.state.repo}
        />
        <button>Fetch the commits!</button>
      </form>
    );
  }
}

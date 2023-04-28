import React from "react";

export default class Spy extends React.Component {
  constructor(props) {
    super(props);
  }

  report = (event) =>
    console.log(`User clicked at position ${event.clientX}, ${event.clientY}`);

  componentDidMount() {
    document.addEventListener("click", this.report);
  }

  componentDidUpdate(oldProps, oldState) {
    console.log(oldProps, oldState);
    const difference = oldProps.commits
      ? oldProps.commits.length - this.props.commits.length
      : this.props.commits.length;
    console.log(`There is a difference of ${difference}`);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.report);
  }

  render() {
    return <p>🕵️</p>;
  }
}

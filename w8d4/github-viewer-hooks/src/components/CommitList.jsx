import CommitListItem from "./CommitListItem";

export default function CommitList(props) {
  const { commits } = props;

  const parsedCommits =
    commits &&
    commits.map((commit) => <CommitListItem key={commit.sha} commit={commit} />);
  return (
    <section className="CommitList">
      <h1>List of commits!</h1>
      <ul>{parsedCommits}</ul>
    </section>
  );
}

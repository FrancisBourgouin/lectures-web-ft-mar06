export default function CommitListItem(props) {
  const { commit } = props;
  const url = commit.html_url;
  const message = commit.commit.message;
  const date = commit.commit.author.date;
  const name = commit.commit.author.name;
  return (
    <div>
      <li className="CommitListItem">
        <a href={url} target="_blank">
          {message}
        </a>
        <p>
          By: {name} on {date}
        </p>
      </li>
    </div>
  );
}

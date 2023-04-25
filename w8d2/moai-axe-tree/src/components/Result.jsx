export default function Result(props) {
  const { message } = props;
  return (
    <footer>
      {!message && <h2>Waiting for your choice!</h2>}
      {message && <h2>{message}</h2>}
    </footer>
  );
}

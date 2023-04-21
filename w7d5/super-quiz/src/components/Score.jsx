// Props: score, questionCount

export default function Score(props) {
  const { score, questionCount } = props;
  return (
    <section>
      <h1>Current score</h1>
      <p>
        {score} out of {questionCount}
      </p>
    </section>
  );
}

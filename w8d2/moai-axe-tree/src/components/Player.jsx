export default function Player(props) {
  const { play } = props;
  return (
    <section className="player" data-testid="player">
      <span role="img" aria-label="player">
        👩‍💻
      </span>
      <div>
        <h1>Choose your destiny !</h1>
        <div className="choices">
          <button
            type="button"
            value="Moai"
            onClick={() => play("🗿")}
            data-testid="moai"
          >
            <span role="img" aria-label="moai">
              🗿
            </span>
          </button>
          <button type="button" value="Axe" onClick={() => play("🪓")}>
            <span role="img" aria-label="axe">
              🪓
            </span>
          </button>
          <button type="button" value="Tree" onClick={() => play("🌳")}>
            <span role="img" aria-label="tree">
              🌳
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import Computer from "./Computer";
import Player from "./Player";
import Result from "./Result";
import {
  determineWinner,
  pickOppositeEmoji,
  pickRandomEmoji,
} from "../helpers/gameHelpers";

export default function Game(props) {
  const [message, setMessage] = useState(null);
  const [isCheating, setIsCheating] = useState(true);

  const play = (playerChoice) => {
    const computerChoice = isCheating
      ? pickOppositeEmoji(playerChoice)
      : pickRandomEmoji(Math.random());
    const newMessage = determineWinner(playerChoice, computerChoice);

    setTimeout(() => {
      setMessage(newMessage);
    }, 1000);
  };

  const switchCheating = () => setIsCheating(!isCheating);

  return (
    <div>
      <main className="game">
        <Computer isCheating={isCheating} switchCheating={switchCheating} />
        <Player play={play} />
      </main>
      <Result message={message} />
    </div>
  );
}

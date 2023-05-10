import { useState } from "react";
import { listen } from "./helpers/speechHelpers";
import "./App.css";

// const scores = [
//   0.000901215011253953, 0.000053123763791518286, 0.994746208190918, 0.0033263724762946367,
//   0.0008392976596951485, 0.00013389824016485363,
// ];
// const labels = ["Alien", "Background Noise", "Chicken", "Ouiiiiiin", "Potato", "Squid"];

// const biggestValue = Math.max(...scores);
// const biggestValueIndex = scores.indexOf(biggestValue)

function App() {
  const coolLabels = ["👾👽👾 ", "📚📖📚", "🐔🐔🐔 ", " 📯📯📯 ", "🍟🥔🍟 ", "🦑🦑🦑"];
  const [currentIndex, setCurrentIndex] = useState(1);

  const listenerOptions = {
    includeSpectrogram: true, // in case listen should return result.spectrogram
    probabilityThreshold: 0.75,
    invokeCallbackOnNoiseAndUnknown: true,
    overlapFactor: 0.5, // probably want between 0.5 and 0.75. More info in README
  };

  const basicListen = () => listen(listenerOptions, console.log);

  const coolListen = () =>
    listen(listenerOptions, (scores, labels) => {
      if (Array.isArray(scores)) {
        const biggestValue = Math.max(...scores);
        const biggestValueIndex = scores.indexOf(biggestValue);

        biggestValueIndex !== 1 && console.log(labels[biggestValueIndex]);
      }
    });
  const coolerListen = () =>
    listen(listenerOptions, (scores, labels) => {
      if (Array.isArray(scores)) {
        const biggestValue = Math.max(...scores);
        const biggestValueIndex = scores.indexOf(biggestValue);

        biggestValueIndex !== 1 && setCurrentIndex(biggestValueIndex);
      }
    });

  return (
    <div className="App">
      <header>
        <h1>Super Emojis of Destiny! </h1>
        <p>👾👽👾 | 🐔🐔🐔 | 📯📯📯 | 🍟🥔🍟 | 🦑🦑🦑</p>
      </header>
      <button onClick={coolerListen}>Start listening!</button>
      <section>
        <h1>ARE YOU SAYING...</h1>
        <p style={{ fontSize: "5em" }}>{coolLabels[currentIndex]}</p>
      </section>
    </div>
  );
}

export default App;

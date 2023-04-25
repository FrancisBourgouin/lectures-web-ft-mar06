export const pickOppositeEmoji = (playerEmoji) => {
  const validElements = ["🗿", "🌳", "🪓"];

  if (!playerEmoji) {
    throw new Error("THE ONLY WINNING MOVE IS NOT TO PLAY");
  }
  if (!validElements.includes(playerEmoji)) {
    throw new Error("CHEATER! :(");
  }

  // if(playerEmoji === "🌳"){
  //   return "🪓"
  // }
  // const pairs = { "🗿": "🌳", "🌳": "🪓", "🪓": "🗿" };

  // return pairs[playerEmoji];
  const newIndex = (validElements.indexOf(playerEmoji) + 1) % 3;
  return validElements[newIndex];
};

export const pickRandomEmoji = (seed) => {
  if (!seed) {
    throw new Error("CANT PLANT SOMETHING WITHOUT A SEED BUD");
  }

  const availableChoices = ["🗿", "🌳", "🪓"];

  const something = Math.abs(Math.floor(seed * 1000 + 7 / 42 - 9001));

  const index = something % availableChoices.length;

  return availableChoices[index];
};

export const determineWinner = (playerChoice, computerChoice) => {
  const validElements = ["🗿", "🌳", "🪓"];
  if (!validElements.includes(playerChoice) || !validElements.includes(computerChoice)) {
    throw new Error("Invalid inputs!");
  }

  const pairs = {
    "🗿": "🌳",
    "🌳": "🪓",
    "🪓": "🗿",
  };
  if (playerChoice === computerChoice) {
    return "TRY AGAIN!";
  }

  if (pairs[playerChoice] === computerChoice) {
    return "SKYNET HAS WON ONCE AGAIN";
  }

  return "HUMANS WON... FOR NOW...";
};

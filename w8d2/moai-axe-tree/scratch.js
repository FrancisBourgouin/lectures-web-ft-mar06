const pickRandomEmoji = (seed) => {
  const availableChoices = ["🗿", "🌳", "🪓"];

  const something = Math.abs(Math.floor(seed * 1000 + 7 / 42 - 9001));

  const index = something % availableChoices.length;

  return availableChoices[index];
};
const seed = Math.random();
const result = pickRandomEmoji(seed);
console.log(result, seed);

const axeSeed = 0.776540110140975;
const treeSeed = 0.8736463854666545;
const moaiSeed = 0.718816097779408;

console.log(pickRandomEmoji(axeSeed));
console.log(pickRandomEmoji(treeSeed));
console.log(pickRandomEmoji(moaiSeed));

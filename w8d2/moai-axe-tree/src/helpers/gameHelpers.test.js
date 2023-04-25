import { determineWinner, pickOppositeEmoji, pickRandomEmoji } from "./gameHelpers";

// Jest! Mocha/Chai CRA => Jest

// Theme/Topic => Specific Cases => Code to test
// Happy path, Crazy paths (bad)

// 🗿 => 🌳
// 🪓 => 🗿
// 🌳 => 🪓

describe("Testing pickOppositeEmoji function", () => {
  it("should return the opposite emoji when given a valid player emoji", () => {
    const validPairs = [
      ["🗿", "🌳"],
      ["🪓", "🗿"],
      ["🌳", "🪓"],
    ];

    for (const pair of validPairs) {
      const expectedResult = pair[1];
      const result = pickOppositeEmoji(pair[0]);

      expect(result).toEqual(expectedResult);
    }
  });
  it("should throw an error if the given emoji is invalid", () => {
    // ... CHEATER!
    const expectedResult = "CHEATER! :(";
    const throwyFunction = () => pickOppositeEmoji("🐔");

    expect(throwyFunction).toThrow(expectedResult);
  });
  it("should throw an error if there is no emoji", () => {
    // ... THE ONLY WINNING MOVE IS NOT TO PLAY
    const expectedResult = "THE ONLY WINNING MOVE IS NOT TO PLAY";
    const throwyFunction = () => pickOppositeEmoji();

    expect(throwyFunction).toThrow(expectedResult);
  });
});

describe("Testing pickRandomEmoji function", () => {
  it("should return all three emojis with proper seeds", () => {
    const validPairs = [
      [0.8736463854666545, "🌳"],
      [0.718816097779408, "🗿"],
      [0.776540110140975, "🪓"],
    ];

    for (const pair of validPairs) {
      const expectedResult = pair[1];
      const result = pickRandomEmoji(pair[0]);

      expect(result).toEqual(expectedResult);
    }
  });
  it("should throw an error if no seed is provided", () => {
    const expectedResult = "CANT PLANT SOMETHING WITHOUT A SEED BUD";
    const throwyFunction = () => pickRandomEmoji();

    expect(throwyFunction).toThrow(expectedResult);
  });
});

describe("Testing determineWinner function", () => {
  it("should return the relevant message if the inputs are valid", () => {
    const validPairs = [
      ["🗿", "🌳"],
      ["🪓", "🗿"],
      ["🌳", "🪓"],
    ];

    for (const pair of validPairs) {
      const expectedResult = "SKYNET HAS WON ONCE AGAIN";
      const result = determineWinner(pair[0], pair[1]);

      expect(expectedResult).toEqual(result);
    }

    for (const pair of validPairs) {
      const expectedResult = "HUMANS WON... FOR NOW...";
      const result = determineWinner(pair[1], pair[0]);

      expect(expectedResult).toEqual(result);
    }

    for (const pair of validPairs) {
      const expectedResult = "TRY AGAIN!";
      const result = determineWinner(pair[0], pair[0]);

      expect(expectedResult).toEqual(result);
    }
  });
  it("should throw an error if one of the inputs is invalid", () => {
    const expectedResult = "Invalid inputs!";
    const throwyFunction = () => determineWinner();

    expect(throwyFunction).toThrow(expectedResult);
  });
});

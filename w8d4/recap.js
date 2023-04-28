// Javascript Classes

// Udemy, FreecodeCamp

// Array
// Date
// Promise
// Set
// BigInt

const today = new Date(); // Instantiate a new date object out of the Date class

class Chicken {
  constructor(languageSpoken) {
    this.languageSpoken = languageSpoken;
  }

  greeting() {
    console.log(`Hi! I am a chicken and I speak ${this.languageSpoken}`);
  }

  poke() {
    if (this.languageSpoken === "English") {
      console.log("Cluck Cluck!");
    } else {
      console.log("Pock pock!");
    }
    console.log("*Runs away*");
  }
}

class AngryFightingChicken extends Chicken {
  constructor() {
    super();
    this.languageSpoken = "RAGE";
  }

  poke() {
    console.log("WHAAAAAAT");
    console.log("*starts to fight*");
    console.log("*angry rock music in the back*");
    console.log("*You run away*");
  }
}

const bob = new Chicken("French");
const gontran = new AngryFightingChicken();

bob.poke();
gontran.poke();

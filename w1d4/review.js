// Existential questions!

// Semicolons or not ?

// Package lock can be removed if necessary

// Arrow functions!

// Primitives in JS

// Boolean : false
// String : ""
// Number : 0, NaN
// Undefined
// Null

// Symbol : ""
// BigInt : 0x0
const person = { name: "Francis", age: undefined };
const result = { error: null, data: "..." };

// Structural Types

// Objects : {}
// Arrays : []
// Functions : Objects!

// Reference vs assignement

const library = {
  playlists: {
    p01: {
      name: "",
    },
  },
  songs: {
    s01: {
      name: "",
    },
  },
};

const playlist1 = library.playlists.p01;

playlist1.name = "Playlist of fun stuff";

// Function definition

function saySomething() {
  console.log("Something");
}

// Function expression

const saySomethingToo = function () {
  console.log("Something too");
};

const arrowSomething = () => console.log("ARROW :D ");

const returnSomething = () => "something";

const multiLineArrow = () => {
  const bob = 1 + 5;

  return bob;
};

saySomething();

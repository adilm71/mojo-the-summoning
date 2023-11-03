const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Deck, Card } = require("./");
const { db } = require("../db/config");
// define in global scope
let deck;

beforeAll(async () => {
  await db.sync({ force: true });
  deck = await Deck.create({ name: "deck 1" });
});

// clear db after tests

describe("Deck", () => {
  it("has a name", async () => {
    expect(deck).toHaveProperty("name");
  });
  it("should create a deck", async () => {
    expect(deck.name).toBe("deck 1");
  });
  it("should associate deck with cards", async () => {
    const deck = await Deck.create({
      name: "Example deck",
      xp: 50,
    });
    const card1 = await Card.create({
      name: "Card 1",
      mojo: 50,
      stamina: 100,
      imgUrl: "card1.jpg",
    });
    const card2 = await Card.create({
      name: "Card 2",
      mojo: 25,
      stamina: 50,
      imgUrl: "card2.jpg",
    });
    await deck.addCards([card1, card2]);
    const cardsDeck = await deck.getCards();
    expect(cardsDeck).toHaveLength(2);
  });
});

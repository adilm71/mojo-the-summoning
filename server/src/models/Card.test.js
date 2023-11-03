const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Card, Attack } = require("./");
const { db } = require("../db/config");

beforeAll(async () => {
  await db.sync({ force: true });
  card = await Card.create({ name: "card 1" });
});

// clear db after tests

describe("Card", () => {
  it("should create a card", async () => {
    expect(card.name).toBe("card 1");
  });
  it("should be able to associate card with attacks", async () => {
    const card = await Card.create({
      name: "Card 1",
      mojo: 50,
      stamina: 30,
      imgUrl: "card1.url",
    });
    const attack1 = await Attack.create({
      title: "attack1",
      mojoCost: 15,
      staminaCost: 10,
    });
    const attack2 = await Attack.create({
      title: "attack2",
      mojoCost: 10,
      staminaCost: 5,
    });
    await card.addAttacks([attack1, attack2]);
    const CardAttacks = await card.getAttacks();
    expect(CardAttacks).toHaveLength(2);
  });
});

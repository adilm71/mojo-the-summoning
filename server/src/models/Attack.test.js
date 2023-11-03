const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Attack } = require("./");
const { db } = require("../db/config");

beforeAll(async () => {
  await db.sync({ force: true });
  attack = await Attack.create({
    title: "TestAttack",
    mojoCost: 10,
    staminaCost: 5,
  });
});

// clear db after tests

describe("Attack", () => {
  it("should create an attack", async () => {
    expect(attack.title).toBe("TestAttack");
    expect(attack.mojoCost).toEqual(10);
    expect(attack.staminaCost).toEqual(5);
  });
});

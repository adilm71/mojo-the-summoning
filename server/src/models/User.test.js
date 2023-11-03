const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { User, Deck } = require("./");
const { db } = require("../db/config");
// define in global scope
let user;

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true });
  user = await User.create({ username: "gandalf" });
});

// clear db after tests

describe("User", () => {
  it("has an id", async () => {
    expect(user).toHaveProperty("id");
  });
  it("should create a user", async () => {
    expect(user.username).toBe("gandalf");
  });
});

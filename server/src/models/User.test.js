const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { User } = require(".");
const db = require("../db/config");

describe("User", () => {
  it("has an id", async () => {
    const user = await User.create({
      username: "testuser",
    });
  });
  expect(user.username).toBe("testuser");
});

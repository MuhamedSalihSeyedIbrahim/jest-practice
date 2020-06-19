jest.mock("node-fetch");
// createUser.js
const fetch = require("node-fetch");
let { Response } = require("node-fetch");
const createUser = async () => {
  const response = await fetch("http://website.com/users", { method: "POST" });
  const userId = await response.text();
  return userId;
};

test("createUser calls fetch with the right args and returns the user id", async () => {
  fetch.mockReturnValue(Promise.resolve(new Response("4")));

  const userId = await createUser();

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith("http://website.com/users", {
    method: "POST",
  });
  expect(userId).toBe("4");
});

// BEFORE
jest.mock("node-fetch");
// AFTER
jest.mock("node-fetch");
Response = jest.requireActual("node-fetch").Response;

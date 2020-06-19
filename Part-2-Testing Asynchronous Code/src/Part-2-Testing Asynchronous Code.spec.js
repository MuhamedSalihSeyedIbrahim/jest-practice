//Async : call back style

const fetchData = async (cb) => {
  return cb("peanut butter");
};

//Bad Practice : Don't do this!
test("the data is peanut butter 1", () => {
  function callback(data) {
    expect(data).toBe("peanut butter");
  }

  fetchData(callback);
});

//Good Practice
test("the data is peanut butter 2", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});

//Async : Promise style

const fetchData1 = () => {
  return new Promise((res) => res("peanut butter"));
};

test("the data is peanut butter 3", () => {
  return fetchData1().then((data) => {
    expect(data).toBe("peanut butter");
  });
});

test("the data is peanut butter 4", () => {
  return expect(fetchData1()).resolves.toBe("peanut butter");
});
test("the data is peanut butter 5", async () => {
  const data = await fetchData1();
  expect(data).toBe("peanut butter");
});
test("the data is peanut butter 6", async () => {
  await expect(fetchData1()).resolves.toBe("peanut butter");
});

//Async : Promise rejection Error style
const fetchData2 = () => {
  return new Promise((res, rej) => rej("error"));
};
test("the fetch fails with an error 1", () => {
  expect.assertions(1);
  return fetchData2().catch((e) => expect(e).toMatch("error"));
});

test("the fetch fails with an error 2", () => {
  return expect(fetchData2()).rejects.toMatch("error");
});

test("the fetch fails with an error 3", async () => {
  expect.assertions(1);
  try {
    await fetchData2();
  } catch (e) {
    expect(e).toMatch("error");
  }
});

//Async : Promise rejection Error style
const fetchData3 = async () => {
  return new Promise((res, rej) => {
    throw new Error("error");
  });
};

test("the fetch fails with an error 4", async () => {
  await expect(fetchData3()).rejects.toThrow("error");
});

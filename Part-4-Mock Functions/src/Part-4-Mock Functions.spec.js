const axios = require("axios");
jest.mock("axios");
describe("axios testing", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  // users.js

  class Users {
    static all() {
      return axios.get("/users.json").then((resp) => resp.data);
    }
  }
  /*
export default Users;
// users.test.js

import Users from "./users";
 */

  it("should fetch users", () => {
    const users = [{ name: "Bob" }];
    const resp = { data: users };
    axios.get = jest.fn().mockResolvedValue(resp);
    // axios.get.mockResolvedValue(resp);

    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))

    return Users.all().then((data) => expect(data).toEqual(users));
  });
});

describe("manual mock testing", () => {
  let myMock, mockFunc, someMockFunction;

  it("mock function call argument oriented tutorial", () => {
    // general code for testing
    function forEach(items, callback) {
      for (let index = 0; index < items.length; index++) {
        callback(items[index]);
      }
    }

    //Genrally used variables

    const mockCallback = jest.fn((x) => 42 + x);
    forEach([0, 1], mockCallback);

    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);
  });

  it("mock function call & bind oriented tutorial", () => {
    myMock = jest.fn();

    const a = new myMock();
    const b = {};
    const bound = myMock.bind(b);
    bound();

    console.log(myMock.mock.instances);

    // > [ <a>, <b> ]
  });

  it("mock function call oriented tutorial", () => {
    // The function was called exactly once
    someMockFunction = jest.fn((x, y) => x + y);
    someMockFunction("return ", "value");
    expect(someMockFunction.mock.calls.length).toBe(1);

    // The first arg of the first call to the function was 'first arg'
    someMockFunction = jest.fn((x, y) => x + y);
    someMockFunction("first arg", "value");
    expect(someMockFunction.mock.calls[0][0]).toBe("first arg");

    // The second arg of the first call to the function was 'second arg'
    someMockFunction = jest.fn((x, y) => x + y);
    someMockFunction("return ", "second arg");
    expect(someMockFunction.mock.calls[0][1]).toBe("second arg");

    // The return value of the first call to the function was 'return value'
    someMockFunction = jest.fn((x, y) => x + y);
    someMockFunction("return ", "value");
    expect(someMockFunction.mock.results[0].value).toBe("return value");

    // This function was instantiated exactly twice
    someMockFunction = jest.fn((x, y) => x + y);
    someMockFunction("return ", "value");
    someMockFunction("return ", "value");
    expect(someMockFunction.mock.instances.length).toBe(2);

    // The object returned by the first instantiation of this function
    // had a `name` property whose value was set to 'test'
    const someMockFunction1 = jest.fn(function (name) {
      this.name = name;
    });
    let name = new someMockFunction1("test");
    console.log(someMockFunction1.mock.instances[0] === name);
    expect(someMockFunction1.mock.instances[0].name).toEqual("test");
  });

  it("mock function return value oriented tutorial", () => {
    myMock = jest.fn();
    console.log(myMock());
    // > undefined

    myMock
      .mockReturnValueOnce(10)
      .mockReturnValueOnce("x")
      .mockReturnValue(true);

    console.log(myMock(), myMock(), myMock(), myMock());
    // > 10, 'x', true, true
    const filterTestFn = jest.fn();

    // Make the mock return `true` for the first call,
    // and `false` for the second call
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

    const result = [11, 12].filter((num) => filterTestFn(num));

    console.log(result);
    // > [11]
    console.log(filterTestFn.mock.calls);
    // > [ [11], [12] ]

    myMockFn = jest.fn((cb) => cb(null, true));

    myMockFn((err, val) => console.log(val));
    // > true
    // foo.js
    module.exports = function () {
      // some implementation;
    };
  });

  it("mock function auto mocking oriented tutorial", () => {
    // test.js
    jest.mock("./foo"); // this happens automatically with automocking
    const foo = require("./foo");

    // foo is a mock function
    foo.mockImplementation(() => 42);
    foo();
    // > 42
    myMockFn = jest
      .fn()
      .mockImplementationOnce((cb) => cb(null, true))
      .mockImplementationOnce((cb) => cb(null, false));

    myMockFn((err, val) => console.log(val));
    // > true

    myMockFn((err, val) => console.log(val));
    // > false
    myMockFn = jest
      .fn(() => "default")
      .mockImplementationOnce(() => "first call")
      .mockImplementationOnce(() => "second call");

    console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
    // > 'first call', 'second call', 'default', 'default'
    const myObj = {
      myMethod: jest.fn().mockReturnThis(),
    };

    // is the same as

    const otherObj = {
      myMethod: jest.fn(function () {
        return this;
      }),
    };
  });

  it("mock function call oriented tutorial", () => {
    const arg1 = 1,
      arg2 = 2;
    const mockFunc = jest
      .fn()
      .mockReturnValue("default")
      .mockImplementation((scalar) => 42 + scalar)
      .mockName("add42");
    // The mock function was called at least once
    mockFunc(1, 2);
    expect(mockFunc).toHaveBeenCalled();

    // The mock function was called at least once with the specified args
    mockFunc(1, 2);
    expect(mockFunc).toHaveBeenCalledWith(arg1, arg2);

    // The last call to the mock function was called with the specified args
    mockFunc(1, 2);
    expect(mockFunc).toHaveBeenLastCalledWith(arg1, arg2);

    // All calls and the name of the mock is written as a snapshot
    expect(mockFunc).toMatchSnapshot();

    // The mock function was called at least once
    expect(mockFunc.mock.calls.length).toBeGreaterThan(0);

    // The mock function was called at least once with the specified args
    expect(mockFunc.mock.calls).toContainEqual([arg1, arg2]);

    // The last call to the mock function was called with the specified args
    expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([
      arg1,
      arg2,
    ]);

    // The first arg of the last call to the mock function was `1`
    // (note that there is no sugar helper for this specific of an assertion)
    expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1][0]).toBe(1);

    // A snapshot will check that a mock was invoked the same number of times,
    // in the same order, with the same arguments. It will also assert on the name.
    // the snapshot contain all calls and their call passed values toEqual will check for all call and param
    expect(mockFunc.mock.calls).toEqual([
      [arg1, arg2],
      [arg1, arg2],
      [arg1, arg2],
    ]);
    expect(mockFunc.getMockName()).toBe("add42");
  });
});

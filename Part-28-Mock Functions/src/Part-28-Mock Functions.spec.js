let mockFn = jest.fn();

let a = new mockFn();
let b = new mockFn();

mockFn.mock.instances[0] === a; // true
mockFn.mock.instances[1] === b; // true
mockFn = jest.fn().mockImplementation((scalar) => 42 + scalar);
// or: jest.fn(scalar => 42 + scalar);

a = mockFn(0);
b = mockFn(1);

a === 42; // true
b === 43; // true

mockFn.mock.calls[0][0] === 0; // true
mockFn.mock.calls[1][0] === 1; // true

// OtherModule.test.js
jest.mock("./SomeClass"); // this happens automatically with automocking
const SomeClass = require("./SomeClass");
const mMock = jest.fn();
SomeClass.mockImplementation(() => {
  return {
    m: mMock,
  };
});

const some = new SomeClass();
some.m("a", "b");
console.log("Calls to m: ", mMock.mock.calls);
let myMockFn = jest
  .fn()
  .mockImplementationOnce((cb) => cb(null, true))
  .mockImplementationOnce((cb) => cb(null, false));

myMockFn((err, val) => console.log(val)); // true

myMockFn((err, val) => console.log(val)); // false
myMockFn = jest
  .fn(() => "default")
  .mockImplementationOnce(() => "first call")
  .mockImplementationOnce(() => "second call");

// 'first call', 'second call', 'default', 'default'
console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
mockFn = jest.fn().mockName("mockedFunction");
mockFn();
expect(mockFn).toHaveBeenCalled();

/* Expected mock function "mockedFunction" to have been called, but it was not called.
 */ jest.fn(function () {
  return this;
});
const mock = jest.fn();
mock.mockReturnValue(42);
mock(); // 42
mock.mockReturnValue(43);
mock(); // 43
myMockFn = jest
  .fn()
  .mockReturnValue("default")
  .mockReturnValueOnce("first call")
  .mockReturnValueOnce("second call");

// 'first call', 'second call', 'default', 'default'
console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
jest.fn().mockImplementation(() => Promise.resolve(value));
test("async test 1", async () => {
  asyncMock = jest.fn().mockResolvedValue(43);

  await asyncMock(); // 43
});
jest.fn().mockImplementationOnce(() => Promise.resolve(value));
test("async test 2", async () => {
  asyncMock = jest
    .fn()
    .mockResolvedValue("default")
    .mockResolvedValueOnce("first call")
    .mockResolvedValueOnce("second call");

  await asyncMock(); // first call
  await asyncMock(); // second call
  await asyncMock(); // default
  await asyncMock(); // default
});
jest.fn().mockImplementation(() => Promise.reject(value));

test("async test 3", async () => {
  asyncMock = jest.fn().mockRejectedValue(new Error("Async error"));

  expect.assertions(1);
  await expect(asyncMock()).rejects.toEqual(new Error("Async error"));
});

jest.fn().mockImplementationOnce(() => Promise.reject(value));
test("async test 4", async () => {
  asyncMock = jest.fn().mockRejectedValueOnce(new Error("Async error"));

  expect.assertions(1);
  await expect(asyncMock()).rejects.toEqual(new Error("Async error"));
});

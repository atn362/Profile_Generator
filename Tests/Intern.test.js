const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "U of M";
  const e = new Intern("Alex", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Alex", 1, "test@test.com", "U of M");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "U of M";
  const e = new Intern("Alex", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
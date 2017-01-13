var assert = require("chai").assert;
var luhnCheck = require("../luhn-check");

describe("Luhn Check function", function() {
  it("should recognize that check() is a function", function() {
    assert.typeOf(luhnCheck.check, 'Function');
  });

  it("should return a boolean value", function() {
    assert.typeOf(luhnCheck.check(555), 'Boolean');
  });

  it("should return true for a valid input number", function() {
    assert.equal(luhnCheck.check(79927398713), true);
  });

  it("should return false for an invalid input number", function() {
    assert.equal(luhnCheck.check(79927398712), false);
  });

});

describe("Double Every Other function", function() {
  it("should double every other number in an array, starting from the end", function() {
    assert.deepEqual(luhnCheck.doubleEveryOther([5, 6, 7, 8]), [5, 12, 7, 16]);
  });
});

describe("Reduce Double Digits function", function() {
  it("should change double-digit numbers in an array to a single-digit sum of their digits", function() {
    assert.deepEqual(luhnCheck.reduceDoubleDigits([5, 12, 7, 16]), [5, 3, 7, 7]);
  });
});

describe("Number To Array function", function() {
  it("should return an array of the individual digits of an input number", function() {
    assert.deepEqual(luhnCheck.numToArray(555), [5, 5, 5]);
  });
});

describe("Sum Array function", function() {
  it("should return the sum of the digits in an array", function() {
    assert.equal(luhnCheck.sumArray([1, 2, 3, 4]), 10);
  });
});
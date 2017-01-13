module.exports = {
  check: function (inputNum) {

    var numArray = this.numToArray(inputNum);
    var checkDigit = numArray.pop();

    // Implement Algorithm
    numArray = this.doubleEveryOther(numArray);
    numArray = this.reduceDoubleDigits(numArray);

    var calcDigit = (this.sumArray(numArray) * 9) % 10;

    return (calcDigit === checkDigit);
  },

  doubleEveryOther: function (inputArr) {
    var outputArr = [];
    var shouldDouble = true;

    for (var i = inputArr.length - 1; i >= 0; i--) {
      outputArr.unshift(shouldDouble ? inputArr[i] * 2 : inputArr[i]);
      shouldDouble = !shouldDouble;
    }
    return outputArr;
  },

  reduceDoubleDigits: function (inputArr) {
    var outputArr = [];

    for (var i = 0; i < inputArr.length; i++) {
      if (inputArr[i] < 10) {
        outputArr.push(inputArr[i]);
      } else {
        outputArr.push(inputArr[i] - 9);
      }
    }

    return outputArr;
  },

  numToArray: function (inputNum) {
    var strArr = inputNum.toString().split("");
    return strArr.map(function(a) {
      return Number(a);
    });
  },

  sumArray: function (inputArr) {
    return inputArr.reduce(function sum(a, b) {
      return a + b;
    }, 0);
  }
};

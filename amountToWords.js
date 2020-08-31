const numberToWords = require("./numberToWords");

const amountToWords = (floatNumber, decimalPlaces) => {
  let [number, decimal] = parseFloat(floatNumber)
    .toFixed(decimalPlaces)
    .split(".");
  numberInWords = numberToWords(number);
  decimalInWords = numberToWords(decimal);
  console.log({ numberInWords, decimalInWords, number, decimal });
  return { numberInWords, decimalInWords };
};

module.exports = amountToWords;

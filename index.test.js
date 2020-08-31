const { amountToWords, numberToWords } = require("./index");

test("123", () => {
  expect(numberToWords(123)).toBe("One Hundred And Twenty Three");
});

test("20170", () => {
  expect(numberToWords(20170)).toBe("Twenty Thousand One Hundred Seventy");
});

test("123.10", () => {
  expect(amountToWords(123.1, 2)).toEqual({
    decimalInWords: "Ten",
    numberInWords: "One Hundred And Twenty Three",
  });
});

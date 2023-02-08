import { amountToWords, numberToWords } from "./index";
import { test, expect } from "vitest";

test("123", () => {
  expect(numberToWords(123)).toBe("One Hundred Twenty Three");
});

test("20170", () => {
  expect(numberToWords("20170")).toBe("Twenty Thousand One Hundred Seventy");
});

test("123.10", () => {
  expect(amountToWords("123.1", 2)).toEqual({
    decimalInWords: "Ten",
    numberInWords: "One Hundred Twenty Three",
  });
});

test("123.1", () => {
  expect(amountToWords(123.1, 1)).toEqual({
    decimalInWords: "One",
    numberInWords: "One Hundred Twenty Three",
  });
});

test("1234567890", () => {
  expect(numberToWords(1234567890)).toBe("Overflow");
});

test("123456789", () => {
  expect(numberToWords(123456789)).toBe(
    "Twelve Crore Thirty Four Lakh Fifty Six Thousand Seven Hundred Eighty Nine"
  );
});

test("NaN", () => {
  expect(numberToWords(NaN)).toBe("NaN");
});

test("Zero", () => {
  expect(numberToWords(0)).toBe("Zero");
});

test("1234567890", () => {
  expect(numberToWords(1234567890)).toBe("Overflow");
});

test("010203405", () => {
  expect(numberToWords(10203405)).toBe(
    "One Crore Two Lakh Three Thousand Four Hundred Five"
  );
});

test("060708910", () => {
  expect(numberToWords("060708910")).toBe(
    "Six Crore Seven Lakh Eight Thousand Nine Hundred Ten"
  );
});

test("111213914", () => {
  expect(numberToWords(111213914)).toBe(
    "Eleven Crore Twelve Lakh Thirteen Thousand Nine Hundred Fourteen"
  );
});

test("151617918", () => {
  expect(numberToWords(151617918)).toBe(
    "Fifteen Crore Sixteen Lakh Seventeen Thousand Nine Hundred Eighteen"
  );
});

test("192030140", () => {
  expect(numberToWords(192030140)).toBe(
    "Nineteen Crore Twenty Lakh Thirty Thousand One Hundred Forty"
  );
});

test("506070180", () => {
  expect(numberToWords(506070180)).toBe(
    "Fifty Crore Sixty Lakh Seventy Thousand One Hundred Eighty"
  );
});

test("900000000", () => {
  expect(numberToWords(900000000)).toBe(
    "Ninety Crore"
  );
});

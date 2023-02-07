import { amountToWords, numberToWords } from "./index";
import { test, expect } from "vitest";

test("123", () => {
  expect(numberToWords("123")).toBe("One Hundred Twenty Three");
});

test("20170", () => {
  expect(numberToWords("20170")).toBe(
    "Twenty Thousand One Hundred Seventy"
  );
});

test("123.10", () => {
  expect(amountToWords("123.1", 2)).toEqual({
    decimalInWords: "Ten",
    numberInWords: "One Hundred Twenty Three",
  });
});

test("123.1", () => {
  expect(amountToWords("123.1", 1)).toEqual({
    decimalInWords: "One",
    numberInWords: "One Hundred Twenty Three",
  });
});

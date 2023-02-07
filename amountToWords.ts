import { numberToWords } from "./numberToWords";

export const amountToWords = (
  input: string | number,
  decimalPlaces: number
) => {
  const float = typeof input === "string" ? parseFloat(input) : input;
  let [number, decimal] = float.toFixed(decimalPlaces).split(".");
  const numberInWords = numberToWords(number);
  const decimalInWords = numberToWords(decimal);
  // console.log({ numberInWords, decimalInWords, number, decimal });
  return { numberInWords, decimalInWords };
};

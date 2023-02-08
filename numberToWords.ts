const lt20Words = [
  "",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
];
const get20Words = [
  "",
  "",
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety",
];

const getFirst99Words = (n: number) => {
  const isLt20 = n < 20;
  const tensPlace = Math.floor(n / 10);
  const onesPlace = n % 10;
  if (isLt20) return lt20Words[n];
  if (onesPlace) return get20Words[tensPlace] + " " + lt20Words[onesPlace];
  else return get20Words[tensPlace];
};

export const numberToWords = (input: string | number) => {
  const number = typeof input === "string" ? parseInt(input) : input;
  if (isNaN(number)) return "NaN";
  if (number === 0) return "Zero";

  const numStr = number.toString();
  if (numStr.length > 9) {
    return "Overflow"; // Does not support converting more than 9 digits yet
  }

  const numPadStr = numStr.padStart(9, "000000000");
  const n1 = Number(numPadStr.slice(-2));
  const n2 = Number(numPadStr.slice(-3, -2));
  const n3 = Number(numPadStr.slice(-5, -3));
  const n4 = Number(numPadStr.slice(-7, -5));
  const n5 = Number(numPadStr.slice(-9, -7));
  // console.log({ n5, n4, n3, n2, n1, numPadStr });

  let amountInWords = "";
  amountInWords += n5 !== 0 ? getFirst99Words(n5) + " Crore " : "";
  amountInWords += n4 !== 0 ? getFirst99Words(n4) + " Lakh " : "";
  amountInWords += n3 !== 0 ? getFirst99Words(n3) + " Thousand " : "";
  amountInWords += n2 !== 0 ? getFirst99Words(n2) + " Hundred " : "";
  amountInWords += n1 !== 0 ? getFirst99Words(n1) : "";

  return amountInWords.trim();
};

const lt20Words = [
  "",
  "One ",
  "Two ",
  "Three ",
  "Four ",
  "Five ",
  "Six ",
  "Seven ",
  "Eight ",
  "Nine ",
  "Ten ",
  "Eleven ",
  "Twelve ",
  "Thirteen ",
  "Fourteen ",
  "Fifteen ",
  "Sixteen ",
  "Seventeen ",
  "Eighteen ",
  "Nineteen ",
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

const regex = /^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/;

const getFirst20Words = (n: string) => lt20Words[Number(n)];
const GetAfter20Words = (n: string) =>
  get20Words[Number(n[0])] + " " + lt20Words[Number(n[1])];

export const numberToWords = (input: string | number) => {
  const number = typeof input === "string" ? parseInt(input) : input;
  if (isNaN(number)) return "";
  if (number === 0) return "Zero";

  const numStr = number.toString();
  if (numStr.length > 9) {
    return "Overflow"; // Does not support converting more than 9 digits yet
  }

  const [, n5, n4, n3, n2, n1] = numStr
    .padStart(9, "000000000")
    .match(regex) ?? ["00", "00", "00", "00", "00"]; // left pad zeros

  // console.log({ n5, n4, n3, n2, n1 });

  let amountInWords = "";
  amountInWords +=
    Number(n5) != 0
      ? (getFirst20Words(n5) || GetAfter20Words(n5)) + "Crore "
      : "";
  amountInWords +=
    Number(n4) != 0
      ? (getFirst20Words(n4) || GetAfter20Words(n4)) + "Lakh "
      : "";
  amountInWords +=
    Number(n3) != 0
      ? (getFirst20Words(n3) || GetAfter20Words(n3)) + "Thousand "
      : "";
  amountInWords += Number(n2) != 0 ? getFirst20Words(n2) + "Hundred " : "";
  amountInWords +=
    Number(n1) != 0 ? getFirst20Words(n1) || GetAfter20Words(n1) : "";

  return amountInWords.trim();
};

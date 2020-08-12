#amount-to-words (Amount to Words)

A simple module to convert numbers and/or amount to words for South Asian numbering system. e.g. Nine crore Eight lakh

# Install (npm)

```javascript
npm install amount-to-words
```

# Example (javascript/nodejs)

```javascript
import {numberToWords} from 'amount-to-words'
...
console.log(numberToWords(number));
...
// Sample Out Put
// number
// 1          ->  One
// 92         ->  Ninety Two
// 123        ->  One Hundred And Twenty Three
// 1234       ->  One Thousand Two Hundred And Thirty Four
// 12345      ->  Twelve Thousand Three Hundred And Forty Five
// 123456     ->  One Lakh Twenty Three Thousand Four Hundred And Fifty Six
// 90000      ->  Ninety Thousand
```

```javascript
import {amountToWords} from 'amount-to-words'
...
console.log(amountToWords(amount,decimalPlaces));
...
// Sample Out Put
// amount    decimalPlaces
// 1.1             2             ->  {numberInWords:"One",decimalInWords:"Ten"}
// 1.1             1             ->  {numberInWords:"One",decimalInWords:"One"}
// 19.12           2             ->  {numberInWords:"Nineteen",decimalInWords:"Twelve"}
// 19.12           1             ->  {numberInWords:"Nineteen",decimalInWords:"One"}

```

---

***NOTE:*** _This module only supports 9 digits input. A typical use case for such conversion is in tax invoices or charts etc. For that more than 9 digits input is not very common._

---

# Contributing

In case you notice a bug, please open an issue mentioning the input that has caused an incorrect conversion.
import numberToWords from './numberToWords';

const amountToWords = (floatNumber, decimalPlaces) => {
    let [number, decimal] = parseFloat(floatNumber).toFixed(decimalPlaces).split('.')
    numberInWords = numberToWords(number);
    decimalInWords = numberToWords(decimal);
    return { numberInWords, decimalInWords }
}

module.export = amountToWords;
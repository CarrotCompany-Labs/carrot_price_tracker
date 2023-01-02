exports.numberWithCommas = (number) => {
    number /= 1000000000000000000
    return number.toLocaleString()
}

exports.getAmountToString = (amount) => {
    const amountConverted = parseInt(amount._hex, 16)
    const amountToConvertedToString = amountConverted.toString()

    return { amountConverted, amountToConvertedToString }
}
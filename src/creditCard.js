function isVisa(creditCard) {
  var visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/
  return visaRegex.test(creditCard)
}

function isMasterCard(creditCard) {
  var masterCardRegex = /^5[1-5][0-9]{14}$/
  return masterCardRegex.test(creditCard)
}

function isDiners(creditCard) {
  var dinersRegex = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/
  return dinersRegex.test(creditCard)
}

function isAmex(creditCard) {
  var amexRegex = /^3[47][0-9]{13}$/
  return amexRegex.test(creditCard)
}

/*
 * Export constant creditCard
 */
export const creditCard = {
  isVisa: isVisa,
  isMasterCard: isMasterCard,
  isDiners: isDiners,
  isAmex: isAmex
}

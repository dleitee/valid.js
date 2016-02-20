/*
 * Validate CPF string with the following format 000.000.000-00
 * Dots and dash separators are optional
 * @param string
 * @return boolean
 */
function isCpf(cpfNumber) {
  var cpfRegex = /^(\d{3}[\.]?\d{3}[\.]?\d{3}[-]?\d{2})$/
  // return cpfRegex.test(cpfNumber)
  if (cpfRegex.test(cpfNumber)) {
    var cpf = cpfNumber.replace(/\.|-/g, '')
    if (
        cpf === "00000000000" ||
        cpf === "11111111111" ||
        cpf === "22222222222" ||
        cpf === "33333333333" ||
        cpf === "44444444444" ||
        cpf === "55555555555" ||
        cpf === "66666666666" ||
        cpf === "77777777777" ||
        cpf === "88888888888" ||
        cpf === "99999999999"
    ) return false

    var final
    var sum = 0
    for (var i = 0; i < 9; i++)
        sum += parseInt(cpf.charAt(i)) * (10 - i)

    final = 11 - (sum % 11)

    if (final === 10 || final === 11) final = 0
    if (final != parseInt(cpf.charAt(9))) return false

    sum = 0
    for (var i = 0; i < 10; i++)
        sum += parseInt(cpf.charAt(i)) * (11 - i)

    final = 11 - (sum % 11)

    if (final === 10 || final === 11) final = 0
    if (final != parseInt(cpf.charAt(10))) return false

    return true
  }
}

/*
 * Export constant cpf
 */
export const cpf = {
  isCpf: isCpf
}

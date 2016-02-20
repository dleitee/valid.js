/*
 * Validate CPF string with the following format 000.000.000-00
 * Dots and dash separators are optional
 * @param string
 * @return boolean
 */
function isCpf(cpfNumber) {
  var cpfRegex = /^(\d{3}[\.]?\d{3}[\.]?\d{3}[-]?\d{2})$/
  return cpfRegex.test(cpfNumber)
}

/*
 * Export constant cpf
 */
export const cpf = {
  isCpf: isCpf
}

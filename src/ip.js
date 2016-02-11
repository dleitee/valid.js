/*
 * Checks for a 'Correct IP Address'
 * @param string - Dotted IP Address
 * @return boolean
 */
function isIp(value) {
  var ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  return ipRegex.test(value)
}

export const ip = {
  isIp: isIp
}


/*
 * Checks for true
 * @params value
 * @return boolean
 */
function isTrue(value) {
  return value == true;
}

/*
 * Checks for false
 * @params value
 * @return boolean
 */
function isFalse(value) {
  return value == false;
}

/*
 * Export constant bool
 */
export const bool = {

  isTrue: isTrue,
  isFalse: isFalse

}

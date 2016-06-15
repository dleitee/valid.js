
/*
 * Checks for true
 * @params value
 * @return boolean
 */
const isTrue = value => value === true;

/*
 * Checks for false
 * @params value
 * @return boolean
 */
const isFalse = value => value === false;

/*
 * Export constant bool
 */
export const bool = {
    isTrue: isTrue,
    isFalse: isFalse
};

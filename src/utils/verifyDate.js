/**
 * Verifies valid date. Only necessary if date is inputted without contraints.
 * If client employs form type 'date' for input, this step function is unnecessary
 * 
 * @param {array} date - array containing date -> [MM, DD, YYYY]
 * @return {boolean} - returns true if date is valid, false if not valid
 */

const verifyDate = (date) => {
  // rejects month values less than 0 and greater than 11
  if (date[0] < 0 || date[0] > 11) return false;
  // rejects day value greater than 31 for months Jan, Mar, May, Jul, Aug, Oct, Dec
  if ((
    date[0] === 0 || 
    date[0] === 2 ||
    date[0] === 4 || 
    date[0] === 6 ||
    date[0] === 7 || 
    date[0] === 9 ||
    date[0] === 11
    ) && date[1] > 31) return false;
  // rejects day value greater than 28 for month Feb
  if (date[0] === 1 && date[1] > 28) return false;
  // rejects day value greater than 30 for months Apr, Jun, Sept, Nov
  if ((
    date[0] === 3 || 
    date[0] === 5 ||
    date[0] === 8 || 
    date[0] === 10 
    ) && date[1] > 30) return false;
  // rejects year values less than 1970
  if (date[2] < 1970) return false;
  // return true if date is valid
  return true;
}

module.exports = verifyDate;


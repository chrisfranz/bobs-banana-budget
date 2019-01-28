/**
 * Verifies input to ensure dependent functions receive valid arguments
 * 
 * @param {string} date - the start date 'DD/MM/YYYY'
 * @param {number} numDays - the number of days
 * @return {boolean} - returns true if input is valid, false if not valid
 */

const verifyInput = (date, numDays) => {
  // verify that arguments are valid type
  if (typeof date !== 'string' || typeof numDays !== 'number') return false;
  // rejects numDays less than 1
  if (numDays < 1) return false;
  // rejects dates that aren't of expected length
  if (date.length !== 10) return false;
  // rejects dates that lack '/' at the expected index
  if (date[2] !== '/' || date[5] !== '/') return false;
  // returns true if input passes checks
  return true
}

module.exports = verifyInput;
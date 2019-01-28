/**
 * converts date string to array, formats month for Date() spec
 * 
 * @param {string} date - 'MM/DD/YYYY'
 * @return {array} - [MM, DD, YYYY]
 */

const transformDate = (date) => {
  /* splits date into array with 3 items: ['MM', 'DD', 'YYYY'] 
  converts type from string to number: [MM, DD, YYYY] */
  const transformedDate = date.split('/').map(el => el * 1)
  // formats MM for compatability with JS Date() spec
  transformedDate[0] = transformedDate[0] - 1;

  return transformedDate;
}

module.exports = transformDate;
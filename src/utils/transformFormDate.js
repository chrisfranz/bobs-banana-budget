/**
 * converts from date from one format to another
 * 
 * @param {string} formDate - 'YYYY-MM-DD'
 * @return {string} - 'MM/DD/YYYY'
 */

const trasformFormDate = (formDate) => {
  // split formDate string into array ['YYYY', 'MM', 'DD' ]
  const dateArray = formDate.split('-');
  // change array elements to ['MM', 'DD', 'YYYY']
  const temp = dateArray[0]; 
  dateArray[0] = dateArray[1] 
  dateArray[1] = dateArray[2] 
  dateArray[2] = temp;
  // transfrom arary into string 'MM/DD/YYYY'
  const date = dateArray.join('/')

  return date;
}

export default trasformFormDate;

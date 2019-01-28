/**
 * 
 * @param {array} date - [MM, DD, YYYY]
 * @param {number} numDays 
 * @return {number}
 */

const getTotal = (date, numDays) => {
  // destructure date argument, to pull out month, day, year for easier readability
  const [ month, day, year ] = date;
  // create a JavaScript Date instance
  let startDate = new Date(year, month, day);

  let total = 0;
  // loops based on numDays value to calculate total
  for (let i = 0; i < numDays; i++) {
    // for each day of numDays, generate currentDay in ms
    let currentDayMs = startDate.setDate(startDate.getDate() + i);
    // generate a new date instance for current step in iteration
    let currentDate = new Date(currentDayMs);
    // get value for day of month, to pass into if statement
    let dayOfMonth = currentDate.getDate();
    // get value for day of week, to pass into if statement
    let dayOfWeek = currentDate.getDay()
    // series of if statements to add correct amount based on dayOfWeek and dayOfMonth
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      total += 0;
    } else if (dayOfMonth > 0 && dayOfMonth <= 7) {
      total += .05;
    } else if (dayOfMonth > 7 && dayOfMonth <= 14) {
      total += .10;
    } else if (dayOfMonth > 14 && dayOfMonth <= 21) {
      total += .15;
    } else if (dayOfMonth > 21 && dayOfMonth <= 28) {
      total += .20;
    } else if (dayOfMonth > 28) {
      total += .25;
    }
    // re-initialize start date to ensure accurate iteration'
    startDate = new Date(year, month, day);
  }
  // return total, formatted for output with '$' prefix, rounded to two decimal places
  total = total.toFixed(2)

  return total
}

module.exports = getTotal;
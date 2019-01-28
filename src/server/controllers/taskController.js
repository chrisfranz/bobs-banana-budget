const verifyInput = require('../../utils/verifyInput');
const transformDate = require('../../utils/transformDate');
const verifyDate = require('../../utils/verifyDate');
const getTotal = require('../../utils/getTotal');

module.exports = {
  verifyValidInput(req, res, next) {
    // destructure req.body to get date and numDays values
    const { date, numDays } = req.body;
    // pass to verifyInput
    const valid = verifyInput(date, numDays);
    // verify input fails, exit
    if (!valid) {
      res.send('Invalid Input');
      return;
    }
    // if verify input passes, call next middleware function;
    next();
  },
  formatDate(req, res, next) {
    // destructure req.body to get date
    const { date } = req.body;
    // call transform date to convert input string into array with 3 items (day, month, year)
    res.locals.formattedDate = transformDate(date);
    next();
  },
  verifyValidDate(req, res, next) {
    const { formattedDate } = res.locals;
    const validDate = verifyDate(formattedDate);
    if (!validDate) {
      res.send('Invalid Date');
      return;
    }
    next();
  },
  calculateAmount(req, res, next) {
    // destructure req.body to get date and numDays values
    const { numDays } = req.body;
    const { formattedDate } = res.locals;

    res.locals.total = getTotal(formattedDate, numDays);

    next();
  }
};

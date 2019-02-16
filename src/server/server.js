const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const taskController = require('./controllers/taskController');

const app = express();

const PORT = 3333;

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/total-cost',
  taskController.transformQueryString,
  taskController.verifyValidInput,
  taskController.formatDate,
  taskController.verifyValidDate,
  taskController.calculateAmount,
  (req, res) => {
    const { total } = res.locals;
    res.send(total);
})

app.post('/total-cost',
  taskController.verifyValidInput,
  taskController.formatDate,
  taskController.verifyValidDate,
  taskController.calculateAmount,
  (req, res) => {
    const { total } = res.locals;
    res.send(total);
})

app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}...`))

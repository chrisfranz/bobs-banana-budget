# bobs-banana-budget

This application contains a REST API endpoint that given a start date (date) and number of days (numDays), returns the total cost of bananas based on a variable pricing schedule.

To access the endpoint, make a POST request to 'http://localhost:3333/total-cost', with content type 'application/json' in the following format:
{
  "date": "MM/DD/YYYY",
  "numDays": integer greater than 0
}

To Start:

1. run 'npm install' to install all dependencies
2. run 'npm run server' to start the server
3. run 'npm run dev-server' to access a front-end UI

Front-end UI runs on localhost:8080 (server must be running for application logic to operate)

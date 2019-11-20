'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const axios = require('axios');

// parse application/json
app.use(bodyParser.json());
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// get the response of client for if conditions
const dataForValidation = async () => {
    try {
        return await axios.get('/api/value')
    } catch (error) {
        console.error(error)
    }
};

app.get('/', function(req, res) {
    res.json({ message: respApi() });
});

const respApi = async () => {

    const data = await dataForValidation();

    if ('INTRADAY' === data().valFunction ) {

        //const interval = data().interval;

        // request api for alpha vantage
        // function=TIME_SERIES_INTRADAY
        axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&outputsize=full&apikey=demo')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    } else if ('DAILY' === data().valFunction ) {
        // request api for alpha vantage
        // function=TIME_SERIES_DAILY
        axios.get('https://www.alphavantage.co/query?function=DAILY&symbol=MSFT&interval=5min&outputsize=full&apikey=demo')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
    else if ('WEEKLY' === data().valFunction)  {
        // request api for alpha vantage
        // function=TIME_SERIES_WEEKLY
        axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=MSFT&interval=5min&outputsize=full&apikey=demo')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
    }

};

// start the app
app.listen(3000, function () {
    console.log("Express is running on port 3000");
});

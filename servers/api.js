const express = require('express');
const app = express();
const port = process.env.PORT_NUMBER || 5000;
const myHandleFunction = require('./Movie.js');
const myHandlerFunctionW = require('./Weather.js');
const myHandlerFunc = require('./Currency.js');
const myHandlerFunctionjt = require('./Time.js');
let counter = 0;

app.get('/api/getCounter', (req, res) => {
    counter++;
    res.send({
      counter,
    });
});
app.use(express());
app.use((req, res, next) => {
    console.log('Incoming request!');
    console.log(req.originalUrl);
    next();
});


// LBrahmadevara logic gives popularmovie from year 1990 to 2020
app.get('/api/JstAzn/currency', myHandlerFunc);
app.get('/api/l90320825/time', myHandlerFunctionjt); //john logic giving city timezone
app.get('/api/LBrahmadevara/popularmovie', myHandleFunction);
app.get('/api/WiamBoumaazi/Weather', myHandlerFunctionW);




app.listen(port, () => console.log(`App listening on ${port}!`));

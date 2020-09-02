const axios = require('axios');
const url = 'https://api.exchangerate-api.com/v4/latest/USD';

const myHandlerFunc = (req, res) => 
{
    let key = String(req.query.usd).toUpperCase();//key MUST BE IN CAPS

    axios.get(url)
        .then((r) => 
        {
            let responseObject = 
            {
                date: new Date(),
                status: 'OK',
                params: req.query,
                response: r.data.rates[key]
            };
            if(r.data.rates[key]==null)//resp will be undefined if a key that was used does not exist 
            {
                responseObject.status = 'ERROR';
                responseObject.response = 'INVALID KEY';
            }
            if(JSON.stringify(req.query).length!=13)
            {
                responseObject.status = 'ERROR';
                responseObject.response = 'INVALID KEY';
            }

            res.send(responseObject);
                
        });
};
module.exports = myHandlerFunc;
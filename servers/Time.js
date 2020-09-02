const express = require('express');
const axios = require('axios');

const app = express();

let counter = 0;

/*app.get('/api/getCounter', (req, res) => {
  counter++;
  res.send({
    counter,
  });
});*/


const myHandlerFunction = (req, res) => {
    let responseObject = {    //Obj to send
      status: 'OK',
      date: new Date() ,
      params: req.query, 
      response: null
    };
  
    
    console.log(JSON.stringify(req.query.city));
  
    if(req.query.city === "" || JSON.stringify(req.query).includes(',')) {
      responseObject.status = 'Error';
      res.send(responseObject);
      return 0;}
  
    let TimezoneApi = 'http://worldtimeapi.org/api/timezone/America/';        // Timezone Api
    TimezoneApi = TimezoneApi.concat(req.query.city);
  
    console.log("result is " + TimezoneApi);
  
    let myPromise = new Promise((resolve, reject) => {
   
    setTimeout( function function2 () {
          axios.get(TimezoneApi)
        
          .then((res) => {
    
             resolve(res.data.datetime);
    
               })
               .catch(e =>  {console.log('Error');
               responseObject.status = 'Error';
               responseObject.response = 'Error';
               res.send(responseObject);})
        
         
      }
      
      , 250)
      
     
    }) 
     
  
   
   
    
  
  
    myPromise.then((successMessage) => {
    
      console.log("Api result: " + successMessage) 
      responseObject.response = successMessage;
  
     
      res.send(responseObject);
      
    
    })
    .catch((reason) => {console.log('Error');
    responseObject.status = 'Error';
    responseObject.response = 'Error';
    res.send(responseObject);})
   
  
  
  };

//app.get('/l90320825/*', myHandlerFunction );

//app.listen(7000);
module.exports = myHandlerFunction;








const axios = require('axios');
const express = require('express');
const myHandlerFunctionW =  (req, res) =>
{
  
  let weatherAPI = 'https://api.opencagedata.com/geocode/v1/json?key=fd3d4723c9354aaaa9dd6bcc2bd92dbe&q=' + req.query.city
    
    const responseObject = {
        status: 'ERR',
        date: new Date(),
        params:  req.query,
        response: 'null',
    };
    
    axios.get(weatherAPI)
    .then(function(Res) {
        let lat = Res.data.results[0].geometry.lat;
        let lng = Res.data.results[1].geometry.lng;
       
        axios.get('https://api.darksky.net/forecast/f4e41f1203b9abcbc27c56cb3fbcf85d/' + lat + ',' + lng)
            .then(function(res) {
                responseObject.status = 'OK';
                if(req.query.city === "" || JSON.stringify(req.query).includes(',')) {
                    responseObject.status = 'Error';
                    res.send(responseObject);
                    return 0;}
             
                responseObject.response = res.data.currently.temperature + " degrees";
                res.send(responseObject);
                
             
            })
            .catch(function(error) {
                
               //responseObject.status = "err";
                res.send(responseObject);
            });
        
    })
    .catch(function(err) {
        
        //responseObject.status = "err";
        res.send(responseObject);
    }) 

};



    


module.exports = myHandlerFunctionW;

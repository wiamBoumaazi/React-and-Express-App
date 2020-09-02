const axios = require('axios');

const myHandleFunction = (req,res) => {
    let responseObj = {
        Date : new Date(),
        Status : "ERROR",
        params : req.query,
        response : "Not a valid parameter"
    };
    if (Object.keys(req.query).length === 1){
        for(const key in req.query){
            if(key !== "year"){
                res.send(responseObj).json();
            }
            else{
                let year = req.query["year"];
                if(!isNaN(year) && year <= 2020 && year >= 1900){
    
                    let url = "https://api.themoviedb.org/3/discover/movie?api_key=8e08b11214706a25758ac317836ef42e&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&primary_release_year=";
                    url += year;
                
                    axios.get(url)
                    .then((res1) => {
                        let title = res1.data["results"][0]["title"]
                        responseObj['Status'] = 'OK';
                        responseObj['response'] = title;
                        res.send(responseObj).json();
                    })
                    .catch((e) => {
                        responseObj["Status"] = 'ERROR';
                        responseObj["response"] =  e.message;
                        res.send(responseObj).json();
                    });
                }
                else{
                    responseObj["Status"] = 'ERROR';
                    responseObj["response"] = 'Year not between 1900 to 2020.';
                    res.send(responseObj).json();
                };
            };
        };
    }
    else {
        responseObj["Status"] = 'ERROR';
        responseObj["response"] = 'Please Enter one Parameter';
        res.send(responseObj).json();
    }; 
};

module.exports = myHandleFunction;
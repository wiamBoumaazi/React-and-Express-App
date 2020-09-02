import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const Weather = () => {
  const initialState = "The result will appear here...";
  const [output, setOutput] = useState('');
  const [value, setValue] = useState("");
  
  
  const fetchProcess = event =>{
    let url = '/api/WiamBoumaazi/Weather?city=' + value;
    axios.get(url)
    .then(res => setOutput(res.data.response))  
}

    
    return (
        <div>
        <h1 className="App">Weather Finder</h1>
        <p className="App">
          Find out momently temperatures 
        </p>
       <p className="App">
        <input  value={value}
          onChange={e => setValue(e.target.value)} 
          placeholder="city..." />
        </p>
        
        <p className="App" >
        <button onClick={fetchProcess}>Get Weather</button>
        </p>
        <p className="App"> {"The Weather in this city is:" +output}</p>
      </div>
    
    );
}

export default Weather;

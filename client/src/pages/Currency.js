import React from 'react';
import axios from 'axios';

let endpoint = '/api/JstAzn/currency?usd=';

const Currency = () => {
  const [response, setResponse] = React.useState('');
  const [key, setKey] = React.useState('');

  const handleClick = () =>{
    axios.get(endpoint+key)
   .then(res => setResponse(res.data.response));
}
  return (
    <div>
      <h2 className="App">
        Currency
      </h2>
        <div id="input-field" >
          <input value={key} onChange={e=>setKey(e.target.value)}/>
        </div>
        <div id="fetch-data">
          <button onClick={handleClick}>
            Enter
          </button>
        </div>
      <h2> 
        1 usd: {response} {key}
      </h2>
    </div>  
  );
};
export default Currency;
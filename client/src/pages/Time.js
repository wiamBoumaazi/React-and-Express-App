import React from 'react';
import axios from 'axios';


const Time = () => {
  const [counter, setCounter] = React.useState("");
  const [value, setValue] = React.useState("");

  const handleClick = () =>{

    setCounter("Loading ...");
    let url = '/api/l90320825/time?city=';

    
   // console.log('First render');
    url = url.concat(value)
    console.log(url);
    axios.get(url)
    //.then(res => console.log(res.data))
   // .then(res => setCounter(res.data.counter))
   .then(res => setCounter(" Time is: " + res.data.response))
    .catch(console.log);
   /* React.useEffect(() => {
   




  }, []);*/

}
  




  return (
    <div>
  <h2 className="App">Time</h2>


    <div id="input-field" >
         <input
         value={value}
         onChange={e=>setValue(e.target.value)} 
          />
    </div>

    <div id="fetch-data" >
       <button className="button" onClick={handleClick}>Submit</button>
     </div>
<div id="output-field">
  <h2> You Enter: {value}<br></br>
       {counter}</h2>

      
       </div>
    </div>

   
 
  
  );
};




export default Time;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Apiput() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.post('https://jsonplaceholder.typicode.com/posts', 
    JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
    }),
    {
headers: {
    'Content-Type' : 'application/JSON; charset-UFT-8',
}
    })
    
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

 const handleClick = () => {
    console.log(data);
  }
  return (
    <div>
     <button onClick={handleClick}>Data put </button>
    </div>
  );
}

export default Apiput;

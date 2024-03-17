import React, { useState, useEffect } from 'react';
import axios from 'axios';

function API() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    
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
     <button onClick={handleClick}>Data </button>
    </div>
  );
}

export default API;

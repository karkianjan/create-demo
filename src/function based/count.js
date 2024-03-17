import react, {useState} from "react";
import { createPortal } from 'react-dom';

function Count(props){
    const [count, setCount]= useState(0)
    //     increment:'0',
    //     decrement:'0',
    //     multiply:'0',
    //     divide:'0'
    
    const handleChange =(e) =>{
        // setCount(count(e.target.value));
        setCount(count => count + 1);

    }
    const handleChangeDec =(e) =>{
        setCount(count => count - 1);

    }



return(
    <div>
        <button onClick ={handleChange}>Increment</button><br></br>
    <h1>{count}</h1>
    <br></br>
    <button onClick ={handleChangeDec}>decrement</button><br></br>
    


  

   
      {createPortal(
        <p>hy rabin </p>,
        document.body
      )}
    </div>


    
)
}
 export default Count;
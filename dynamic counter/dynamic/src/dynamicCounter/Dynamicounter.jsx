import React, { useEffect, useState } from 'react';


const Dynamicounter = () => {

  const [count, setCount]= useState(0)
  const [bgColor, setBgColor] = useState('white');

  useEffect(()=>{
    if(count%2===0) {
    setBgColor('red')
    }
    else{
    setBgColor("yellow")
    }
  });

  const increment = ()=>{
    setCount(count+1)
  }

   const decrement = ()=>{
    if(count>0)
    setCount(count-1)
  }
   const reset = ()=>{
    setCount(0)
  }



  return (
      <div class="div1" style={{backgroundColor:bgColor, minHeight: '100vh',width: '100vw'}}>
        <div class="div2">
        <h1>A Beatiful Counter {count}</h1>
        <button onClick={increment} style={{color:"black",background:"green"}}>+</button> 
        <button onClick={decrement} style={{color:"black",background:"orange"}}>-</button>
        <br />
        <br />
        <button onClick={reset} style={{color:"black",background:"blue"}}>Reset</button>
    </div>
    </div>
     
  )
};

export default Dynamicounter
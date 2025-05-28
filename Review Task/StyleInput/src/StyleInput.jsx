import React, {useState} from 'react';

const StyleInput = () => {

const [text, setText]= useState('');

const changeText = (e)=>{
    setText(e.target.value);
}

const handleButton=()=>{
    if(text===''){
      alert('enter some text')
    }else
      alert(`You'r text is ${text}`)
}

const restIt=()=>{
    if(text===''){
        alert('Empty input')
    }else
    setText('')
}

  return (
    <div>
     <h1>A Simple Input Form</h1>
      <input 
      style={{padding:'10px'}}

      value={text} 
      onChange={changeText} 
      type="text" 
      placeholder='Please Enter some text'>
      </input>
      <br />
      <br />
      <button onClick={handleButton} style={{color:"white", backgroundColor:"blue"}}>Submit</button> &nbsp;
      <button onClick={restIt} style={{color:"white", background:'red'}}>Reset It</button>


    </div>
  )
}

export default StyleInput
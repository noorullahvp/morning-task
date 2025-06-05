import React, { useState } from 'react';

const Form = () => {

const[name, setName]=useState('');
const[email, setEmail]=useState('');
const[password, setPassword]=useState('');
const[nError, setNError]=useState('');
const[mError, setMError]=useState('');
const[pError, setPError]=useState('');



const submitForm =(e)=>{
    e.preventDefault()


let isValid = true;

setNError('');
setMError('');
setPError('');

if(!name.trim()){
    setNError('Name is Required');
    isValid= false;
}

if(!email){
    setMError('Email is required')
    isValid=false;
}
if(!password){
    setPError('Password is required')
    isValid=false;
}else if(password.length<6){
    setPError('Password should be minimum 6characters')
    isValid=false;
}
   if(isValid){
    alert(`Form submitted ${name} ,${email}, ${password}`);
   }

};
  const errorStyle = {
    border: '2px solid red',
    padding: '10px'
  };

    const normalStyle = {
    border: '2px solid green',
    padding: '10px'

  };

  return (

    <form onSubmit={submitForm} >  
    <div>
        <h1 style={{color:"yellow"}}>Simple Form</h1>
    </div>
    <br />
    <div>
        <label>Name:&nbsp;</label>
        <input onChange={(e)=>setName(e.target.value)} value={name}  type='text' name='name' placeholder='Enter Name' style={nError ? errorStyle : normalStyle}/>
         {nError && <p style={{ color: 'red' }}>{nError}</p>}
    </div>
    <br />
    <div>
        <label>Email:&nbsp;</label>
        <input onChange={(e)=>setEmail(e.target.value)} value={email}  type="email" name='email' placeholder='enter email' style={mError ? errorStyle : normalStyle} />
         {mError && <p style={{ color: 'red' }}>{mError}</p>}
    </div>
    <br />
    <div>
        <label>Password:&nbsp;</label>
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" name='password' placeholder='*****' style={pError ? errorStyle : normalStyle}/>
         {pError && <p style={{ color: 'red' }}>{pError}</p>}
    </div>
    <br />
    <br />

    <button type='submit'  style={{color:"white", backgroundColor:"blue"}}>Submit Now</button>
    </form>
    
  )
}

export default Form
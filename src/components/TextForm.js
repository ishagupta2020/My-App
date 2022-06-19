import React from 'react'
import { useState } from 'react'
export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase is clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
    } 
       const handleDownClick=()=>{
        console.log("Uppercase is clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText);
       }
    const handleClear=()=>{
        console.log("Uppercase is clicked"+ text);
        let newText="";
        setText(newText);
    }
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const[text, setText]=useState('Enter text');
return (
    <>
    <div class="container" style={{color:props.mode==='light'?'black':'white'}}>
    
<div className="my-3">
  <h1>{props.heading}</h1>
  <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}></textarea>
  </div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase </button>
<button className="btn btn-primary mx-2" onClick={handleDownClick}> Convert to Lowercase </button>
<button className="btn btn-primary mx-2" onClick={handleClear}> Clear</button>


    </div>
    <div className="container my-3"  style={{color:props.mode==='light'?'black':'white'}}>
    <h1>Your text summary</h1>
    <p>{text.length === 0 ? 0 : text.trim().split(" ").length} words and {text.length} characters</p>

</div>
    </>
  )
}


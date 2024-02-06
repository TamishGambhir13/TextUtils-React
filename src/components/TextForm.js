import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("UpperCase Was Clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLowClick=()=>{
        console.log("LowerCase Was Clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const clearAll=()=>{
        console.log("Text is cleared ");
        let newText=(" ");
        setText(newText);
        props.showAlert("All text has been cleared","success");
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied to clipboard!!","success");
    }
    const handleInverseClick = () => {
        console.log("Inverse Click is triggered");
        let newtext = "";
        for (let i = text.length - 1; i >= 0; i--) {
            newtext += text[i];
        }
        setText(newtext);
        props.showAlert("Text reversed","success");
      };
    const wordCount = (text)=>{
        let regex = /\s+\S+/;
        let numOfWords = text.split(regex);
        return numOfWords.length;
      }
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    const [text,setText]=useState('');
    return (
    <>
    <div className='container 'style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control my-2" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#029992':'#d9d3d7b8',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleInverseClick}>Reverse Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={clearAll}>Clear</button>
        </div>
    </div>
    <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text===""? 0 : wordCount(text)} words and {text.length} characters</p>
        <p>{ text===""? 0 * 0.008 : wordCount(text) * 0.008} Minutes read</p>
        <h2>Text Preview</h2>
        <p>{text.length>0?text:"Enter something in the text box above to preview it here!!"}</p>
    </div>
    </>
  )
}

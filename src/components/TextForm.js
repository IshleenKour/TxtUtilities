import React, {useState} from "react"
 
export default function TextForm(props){
    const handleUpClick = ()=>{
console.log("Upper case was Clicked ");
    let newText = text.toUpperCase();
    setText(newText);
     props.showAlert("Converted to UpperCase!",  "success"); 
    }
    const handleLowClick = ()=>{
console.log("Lower case was Clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!",  "success");
    }
    const handleClearClick = ()=>{
console.log("Clear was Clicked ");
    let newText = "";
    setText(newText);
    props.showAlert("Text has been Cleared!",  "success");
    }
    const handleCopy =()=>{
        console.log('the text was copied');
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!",  "success");
    }
    const handleExtraSpaces =()=>{
        console.log("Extra spaces were removed");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("ExtraSpaces has been cleared!", "success");
    }
    const handleSentenceCase = () => {
        console.log("Sentence case was clicked");let newText = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, function(c){
        return c.toUpperCase();
    });
    setText(newText);
    props.showAlert("Converted to SentenceCase!",  "success");
}

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value)
    }

    const readOnlyValue = ()=>{
        console.log("This is readOnly");
    }

    const [text, setText] = useState('');
    //text = "new text"; // wrong way of changing the state
    //setText("new text"); correct way of changing the state
    return(
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" onChange ={handleOnChange} value={text}id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'#042743'}}></textarea>
            </div> {/*one curly brace is for writing js another is for object in js */}
            <button className="btn btn-primary my-2 my-sm-0 mx-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button className="btn btn-primary my-2 my-sm-0 mx-1" onClick={handleLowClick}>Convert to lowercase</button>
            <button className="btn btn-primary my-2 my-sm-0 mx-1" onClick={handleSentenceCase}>Convert to Sentencecase</button>
            <button className="btn btn-primary my-2 my-sm-0 mx-1" onClick={handleExtraSpaces}>Clear Extra Spaces</button>
            <button className="btn btn-primary my-2 my-sm-0 mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary my-2 my-sm-0 mx-1" onClick={handleClearClick}>Clear
            </button>

            <div className="contaienr my-3" style={{color: props.mode==='dark'?'white':'#042743'}}> 
                <h2>Your Text Summary</h2>
                <ul>
                    <li>{text.trim().split(/\s+/).filter(word => word.length > 0).length} words and {text.replace(/\s/g, '').length} characters and {(text.match(/ /g) || []).length} spaces used </li>
                    <li>{0.008 * text.trim().split(/\s+/).filter(word => word.length > 0).length} Minutes read</li>
                </ul>
                <h2>Result</h2>
                <p><textarea className = "form-control" value={text} onChange ={readOnlyValue} id="myBox1" style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'#042743'}} rows ="8"/> </p>
            </div>
        </div>
        </>
    )
}
import React, {useState} from 'react'


export default function Textform(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted The Text To UpperCase", "success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted The Text To LowerCase", "success")
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied To Clipboard!", "success")
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Cleared The Text", "success")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed", "success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} value={text} onChange={handleOnChange} rows="8"></textarea>
                <button className='btn btn-primary my-3 mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary my-3 mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
                <button className='btn btn-primary my-3 mx-1' onClick={handleClearClick}>Clear Text</button>
                <button className='btn btn-primary my-3 mx-1' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary my-3 mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
        </div>
        <div className="container my-2"  style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter Your Text To Preview It Here"}</p>
        </div>
        </>
        
    )
}

import React, {useState} from 'react'

export default function TextForm(props) {

const handleUppercaseClick = () => {
    // console.log("Uppercase was clicked "+text);
    let newText = text.toUpperCase();
    setText(newText);
}

const handleLowercaseClick = () => {
    // console.log("Lowercase was clicked "+text);
    let newText = text.toLowerCase();
    setText(newText);
}

const handleReversecaseClick = () => {
    // console.log("Reverse was clicked "+text);
    let newText = [...text].reverse().join("");
    setText(newText);
}

const handleRemovespaceClick = () => {
  // console.log("Lowercase was clicked "+text);
  let newText = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== ' ') {
      newText += text[i];
    }
  }
  setText(newText);
};

const handleClearClick = () => {
    // console.log("Clear was clicked "+text);
    let newText = "";
    setText(newText);
}

const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
}

const [text, setText] = useState("");

  return (
    <>
    <div className='container my-3'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="Textarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUppercaseClick}>Convert to Uppercase</button>
        <button className="btn btn-success mx-1" onClick={handleLowercaseClick}>Convert to Lowercase</button>
        <button className="btn btn-secondary mx-1" onClick={handleReversecaseClick}>Reverse</button>
        <button className="btn btn-warning mx-1" onClick={handleRemovespaceClick}>Remove Spaces</button>
        <button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear</button>
    </div>
    <div className='container my-3'>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} Word's, {text.length} Character's</p>
      <p>{0.008 * text.split(" ").length} Minutes To Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
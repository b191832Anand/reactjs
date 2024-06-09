import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("enter the value or the data");
  let update = (event) => {
    setText(event.target.value);
  };
  let toUpper = () => {
    let val = text.toUpperCase();
    setText(val);
  };
  let toLower = (event) => {
    let val = text.toLowerCase();
    setText(val);
  };
  let clearall =()=>{
     setText("");
  }
  return (
    <div>
      <div className="container"  style={{color:props.mode=='light'?'black':'white'}}>
        <h1>{props.title}</h1> 
        <textarea
          name="text"
          id=""
          cols="100"
          rows="8"
          value={text}
          onChange={update}
          style={{backgroundColor:props.mode=='light'?'white':'grey',color:props.mode=='light'?'black':'white ',borderRadius:10,borderColor:'black'}}
        ></textarea>
        <br />
        <button className="btn btn-primary my-3" onClick={toUpper}>
          convert to upper
        </button>
        <button
          className="btn btn-primary"
          style={{ marginLeft: 10 }}
          onClick={toLower}
        >
          convert to lower
        </button>
        <button className="btn btn-primary mx-2" onClick={clearall}>clear</button>
      </div>
      <div className="container" style={{color:props.mode=='light'?'black':'white'}}>
        <h1>total</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <h2>preview</h2>
        <p>{text.length>0?text:"enter the sentences in the text area to get preview"}</p>
      </div>
    </div>
  );
}

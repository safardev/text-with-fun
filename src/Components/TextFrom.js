import React, { useState } from "react";

export default function TextFrom(props) {
  const onChangeHandler = (event) => {
    setText(event.target.value);
  };

  const upperCaseHandler = () => {
    let newText = text.toUpperCase();
    setText(newText);
    newText.length > 0
      ? props.showAlert("Converted to UPPERCASE", "success")
      : props.showAlert("Enter some Text...", "warning");
  };

  const lowerCaseHandler = () => {
    let newText = text.toLowerCase();
    setText(newText);
    newText.length > 0
      ? props.showAlert("Converted to lowercase", "success")
      : props.showAlert("Enter some Text...", "warning");
  };

  const clearTextHandler = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };
  const copyTextHandler = () => {
    let textArea = document.getElementById("exampleFormControlTextarea1");
    textArea.select(0, 9999);
    navigator.clipboard.writeText(textArea.value);
    document.getSelection().removeAllRanges();
    text.length > 0
      ? 
        
        props.showAlert("Text copied...!", "success")
      : props.showAlert("Enter some Text to copy...", "warning");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container col-10 mt-3 p-2"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Enter your Text...</h1>
        <div className="mb-3 mt-4">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={onChangeHandler}
            placeholder="Start Writting..."
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#bdbebf",
            }}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary btn-sm mx-2 my-2"
          onClick={upperCaseHandler}
        >
          UpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm mx-2 my-2"
          onClick={lowerCaseHandler}
        >
          LowerCase
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm mx-2 my-2"
          onClick={copyTextHandler}
        >
          Copy All
        </button>
        <button
          type="button"
          className="btn btn-danger btn-sm mx-2 my-2"
          onClick={clearTextHandler}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container col-10 my-4"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3>Your text summary</h3>
        <p>
          {text === "" ? 0 : text.trim().split(" ").length} words and{" "}
          {text.length} characters
        </p>
      </div>
      <div
        className="container col-10 my-4"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to display..."}</p>
      </div>
    </>
  );
}

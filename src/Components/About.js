import React from "react";

export default function About(props) {
  return (
    <>
      <div
        className="container d-flex-column align-items-center text-center mt-4"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1 className="display-2 ">This is a Text with Fun App</h1>
        <p>Made with React.js || A JavaScript Library</p>
        <p>V 0.1</p>
        <h5 className="display-3">Made by Rahul Kumar</h5>
        <h5 className="display-4">have Fun...!</h5>
      </div>
    </>
  );
}

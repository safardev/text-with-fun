import React from "react";

export default function Contact(props) {
  return (
    <>
    <div
      className="container d-flex-column align-items-center text-center my-5"
      style={{ color: props.mode === "light" ? "black" : "white" }}
    >
      <h1>/---For any Query---\</h1>
      <p className="my-2">Instagram - @rahulkasafar</p>
      <p>Facebook - @rahulkasafar</p>
      <p>Twitter - @Rahulkasafar</p>
      <p>Github - @safardev</p>
    </div>
    </>
  );
}

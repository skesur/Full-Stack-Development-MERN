import { useState } from "react";

const Pb356 = () => {
  var [heading, setH] = useState("LJ University");
  var [text, setT] = useState("Hide");
  var [col, setC] = useState("red");
  var [t, setR] = useState("React JS Hooks");
  return (
    <>
      <button
        onClick={() => {
          if (heading == "LJ University") {
            setH("Welcome Students");
          } else {
            setH("LJ University");
          }
        }}
      >
        Change Text
      </button>
      <br />
      <br />
      <button
        onDoubleClick={() => {
          if (col == "red") {
            setC("blue");
          } else {
            setC("red");
          }
        }}
      >
        Change Color
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          if (text == "Hide") {
            setT("Show");
            setR("");
          } else {
            setT("Hide");
            setR("React JS Hooks");
          }
        }}
      >
        {text}
      </button>
      <br />
      <br />
      <h1 style={{ color: col }}>{heading}</h1>
      <h2>{t}</h2>
    </>
  );
};

export default Pb356;

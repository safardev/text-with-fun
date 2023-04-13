import Navbar from "./Components/Navbar";
import TextFrom from "./Components/TextFrom";
import React, { useState } from "react";
import Alert from "./Components/Alert";



function App() {
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setBtnText("Disable Dark Mode");
      document.body.style.backgroundColor = "#0e3b80";
      showAlert("Dark mode is enabled", "success");
      document.title = "TextFun - Dark Mode";
    } else {
      setMode("light");
      setBtnText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
      document.title = "TextFun";
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState("light");
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  return (
    <>
      <Navbar
        title="Fun with Text"
        about="About"
        mode={mode}
        btnText={btnText}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <TextFrom mode={mode} showAlert={showAlert}/>
      {/* <Routes>
        <Route exact path="/about" element={<About mode={mode} />} />
        <Route
          exact
          path="/"
          element={<TextFrom mode={mode} showAlert={showAlert} />}
        />
        <Route exact path="/contact" element={<Contact mode={mode} />} />
      </Routes> */}
    </>
  );
}

export default App;

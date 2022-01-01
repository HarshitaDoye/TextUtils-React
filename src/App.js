import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/"> */}
        <TextForm
          showAlert={showAlert}
          heading="Enter The Text to analyze below"
          mode={mode}
          alert
        />
        {/* </Route>
          </Switch> */}

        {/* <About /> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;

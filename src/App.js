import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar.js"
import Home from "./component/Home.js"
import About from "./component/About.js"
import NoteState from "./context/notes/NoteState";
import Alert from "./component/Alert";
import Signup from "./component/Signup";
import Login from "./component/Login";
import { useState } from "react";


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
    <NoteState>
    <Router>
    <Navbar />
    <Alert alert={alert}/>
       <div className="container">
         <Routes>
          <Route path="/" element={<Home showAlert={showAlert} />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login showAlert={showAlert}/>}/>
          <Route path="/Signup" element={<Signup showAlert={showAlert}/>}/>
        </Routes>
        </div>
      </Router>
      </NoteState>
  </>
  );
}

export default App;

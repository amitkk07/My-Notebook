import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar.js"
import Home from "./component/Home.js"
import About from "./component/About.js"
import NoteState from "./context/notes/NoteState";
import Alert from "./component/Alert";

function App() {
  return (
    <>
    <NoteState>
    <Router>
    <Navbar />
    <Alert message="This is Alert"/>
       <div className="container">
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
        </div>
      </Router>
      </NoteState>
  </>
  );
}

export default App;

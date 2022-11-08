import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar.js"
import Home from "./component/Home.js"
import About from "./component/About.js"
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <>
    <NoteState>
    <Router>
    <Navbar />
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </NoteState>
  </>
  );
}

export default App;

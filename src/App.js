import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Upload from "./components/Upload";
import About from "./components/About";
import ContactUS from "./components/Contact";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUS />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {/* <Upload /> */}
    </div>
  );
}

export default App;

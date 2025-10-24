import { BrowserRouter as Router, Routes, Route, Links } from "react-router-dom";
import Background from "./pages/Background.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Link1 from "./pages/Link1.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";

const App = () => {
  return (
    <div className="justify-between w-full h-full m-auto p-auto bg-black">
      <Background />
      <ScrollToTop />
      {/* 👇 Page routing */}
      <div className="text-white pt-5 items mr-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/links" element={<Link1 />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/terms" element={<Terms />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./pages/Background.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Link1 from "./pages/Link1.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import { useTheme } from "./context/ThemeContext.jsx";

const App = () => {
  const {isDark} = useTheme();
  return (
    <div className={`w-full h-full ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
      <Background />
      <ScrollToTop />
      <div className={`${isDark ? 'text-white' : 'text-gray-900'} pt-5`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/links" element={<Link1 />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="*" element={<div>404 - Page Not Found</div>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;

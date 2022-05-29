import "./App.css";
import Navbar from "./components/general/Navbar";
import HeroSection from "./components/general/HeroSection";
import Blogs from "./pages/Blogs";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const Layout1 = ({ children }) => {
    return (
      <div className="w-full bg-gray-100 pt-24 text-white">
        <div>
          <Navbar />
        </div>
        {children}
      </div>
    );
  };
  const Layout2 = ({ children }) => {
    return (
      <div className="h-screen w-full  bg-gray-100 text-white">{children}</div>
    );
  };
  return (
    <div className="App h-screen">
      <Routes>
        <Route
          path="/"
          element={
            <Layout1>
              <HeroSection />
            </Layout1>
          }
        />
        <Route
          path="/blogs"
          element={
            <Layout1>
              <Blogs />
            </Layout1>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const navLinks = [
    "features",
    "about",
    "services",
    "gallery",
    "testimonials",
    "team",
    "contact",
  ];

  return (
    <>
      <Navbar title={"React Landing Page"} links={navLinks} />
    </>
  );
}

export default App;

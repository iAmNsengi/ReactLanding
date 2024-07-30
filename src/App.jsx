import "./App.css";
import Banner from "./components/Banner";
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
      <Banner
        title={" WE ARE A LANDING PAGE"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum."
        }
      />
      
    </>
  );
}

export default App;

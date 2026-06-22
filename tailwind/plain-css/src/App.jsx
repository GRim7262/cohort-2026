import Container from "./components/Container";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./index.css";
import heroUi from "./assets/hero-ui.webp";

function App() {
  return (
    <div className="layout">
      <Container>
        <div className="left-line" />
        <div className="right-line" />
        <Navbar />
        <Hero />
        <div className="hero-image-container">
          <div className="horizontal-line" />
          <img src={heroUi} className="hero-img" />
        </div>
      </Container>
    </div>
  );
}

export default App;

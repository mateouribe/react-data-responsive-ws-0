import React from "react";
import Analytics from "./components/Analytics";
import Plans from "./components/cards/Plans";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Plans />
      <Footer />
    </div>
  );
}

export default App;

import Food from "./components/Food";
import HeadlineCards from "./components/HeadlineCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Category from "./components/Category.";
import Footer from "./components/Footer";
import SousFoter from "./data/SousFoter";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Food /> 
      <HeadlineCards />
      <Footer />
      <SousFoter />
    </div>
  );
}

export default App;

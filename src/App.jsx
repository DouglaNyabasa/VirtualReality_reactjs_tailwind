import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Navbar/hero/Hero";
import Features from "./components/features/Features";
import Price from "./components/price/Price";
import Workflow from "./components/workflow/Workflow";
import Testimonial from "./components/testmonials/Testimonial";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Features />
        <Workflow />
        <Price />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}

export default App;

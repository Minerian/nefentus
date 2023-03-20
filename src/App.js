import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Home from "./pages/Home";
import "./style/general.css";
import Navigation from "./components/navigation/navigation";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Home />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;

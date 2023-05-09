import Nav from "./Components/App/Nav.js";
import Footer from "./Components/App/Footer.js";
import RouteComponent from "./Components/Routes/RouteComponent.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <RouteComponent/>
      <Footer />
    </div>
  );
}

export default App;

import Nav from "./Components/Nav.js";
import Footer from "./Components/Footer.js";
import RouteComponent from "./Components/RouteComponent.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>Welcome to inIT!</h1>
      <RouteComponent/>
      <Footer />
    </div>
  );
}

export default App;

import "./styles/general.css"

import Header from './components/Header';
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Banner />
    </div>
  );
}

export default App;

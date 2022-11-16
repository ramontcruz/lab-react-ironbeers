import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Beers from "./pages/Beers";
import Randombeer from "./pages/Randombeer";
import beers from "./assets/beers.png";
import randombeers from "./assets/random-beer.png";
import DetailBeerPage from "./pages/DetailBeerPage";


function App() {

  return (
    <div className="App">
      <Routes>
         <Route path="/" />
        <Route path="/beers" element={ <Beers /> } />
        <Route path="/random-beer" element={ <Randombeer /> } />
        <Route path="/detail-beer/:beerID" element={ <DetailBeerPage /> } />
      </Routes>
      <div>
      <Link to={'/beers'}>
        <img src={beers} class="img-fluid" alt="Beers"/>
      </Link>
      <h1>All Beers</h1>
      <p>Lorem ipsum</p>
      <Link to={'/random-beer'}>
        <img src={randombeers} class="img-fluid" alt="Beers"/>
      </Link>
      <h1>All Beers</h1>
      <p>Lorem ipsum</p>
      </div>
     
      

    </div>
  );
}

export default App;
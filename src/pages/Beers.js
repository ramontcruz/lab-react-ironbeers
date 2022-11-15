import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Navbar from "../components/Navbar";

function Beers() {
  const [beers, setBeers] = useState([]);
  const [reload, setReload] = useState(false);

  //fetch -> api do navegador -> requisições http (get, put, pacth, delete, post) -> axios
  //promisses -> async/await

  //useEffect()
  // array de dependencias
  // [] -> vai rodar APENAS uma vez -> quando o componente/pagina for carregado
  // [state] -> toda vez que esse state MUDAR DE VALOR -> o código dentro do useEffect roda novamente.

  useEffect(() => {
    async function fetchBeers() {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(response.data);
    }

    fetchBeers();
  }, [reload]);

  function handleReload() {
    setReload(!reload);
  }

  console.log(beers);

  return (
    <div>
    <Navbar/>
    

      {beers.map((beer) => {
        return (
            
          <div  key={beer._id} >
                
                <div  className="Beers">
                    <div>
                        <img src={beer.image_url} alt="picture" width="30px"/>
                    </div>
                    <div>
                        <p>
                            {beer.name}
                        </p>
                        <p>
                            {beer.tagline}
                        </p>
                        <p>
                            Created by: {beer.contributed_by}
                        </p>
                    <hr></hr>
                    </div>
                </div>
            </div>
          
        );
      })}
    </div>
  );
}

export default Beers;
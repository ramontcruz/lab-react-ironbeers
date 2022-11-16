import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function DetailBeerPage() {
  const { beerID } = useParams();
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);
  const [showForm2, setShowForm2] = useState(true);

  const [reload, setReload] = useState(false);
  const [beers, setBeers] = useState({});
  const [form, setForm] = useState({
    nome: "",
    idade: "",
    cidade: "",
    estado: "",
    profissao: "",
    hobby: "",
    signo: "",
  });

  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerID}`
      );
      setBeers(response.data);
      //preenchendo o form com as informações existentes
      setForm(response.data);
    }

    fetchUser();
  }, [reload]);


  return (
    <div>
    <Navbar/>
    <div  >
        <div>
            <img src={beers.image_url} alt="picture" width="30px"/>
        </div>
        <div>
            <p>
                {beers.name}
            </p>
            <p>
                {beers.tagline}
            </p>
            <p>
                {beers.first_brewed}
            </p>
            <p>
                {beers.attenuation_level}
            </p>
            <p>
                {beers.description}
            </p>
            <p>
                Created by: {beers.contributed_by}
            </p>
        <hr></hr>
        </div>
    </div>

     
    </div>
  );
}

export default DetailBeerPage;
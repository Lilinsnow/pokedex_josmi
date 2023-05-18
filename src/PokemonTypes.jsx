import { useEffect, useState } from "react";
import axios from "axios";
import PokemonTypeItem from "./PokemonTypeItem.jsx";
import "./App.css";

const getImage = (number) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;
};

function PokemonTypes() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const apiURL = "https://pokeapi.co/api/v2/type?limit=151";
    console.log("codigo antes de llamada de axios");

    axios.get(apiURL).then((response) => {
      console.log("dentro del then");
      const normalizedResults = response.data.results.map((element, index) => {
        return {
          ...element,
          number: index + 1,
          imageUrl: getImage(index + 1),
        };
      });
      setPokemons(normalizedResults);
    });
    console.log("codigo después de llamada de axios");
  }, []);

  console.log("después del useEffect");

  return (
    <div className="pokemons">
      {pokemons.map((element) => (
        <PokemonTypeItem
          key={element.name}
          imageUrl={element.imageUrl}
          name={element.name}
          number={element.number}
        />
      ))}
    </div>
  );
}

export default PokemonTypes;

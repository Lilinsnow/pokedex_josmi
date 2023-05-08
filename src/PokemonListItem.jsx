import { Link } from "react-router-dom";

const PokemonListItem = (props) => {
  return (
    <Link className="pokemon" to={`/pokemon/${props.number}`}>
      <img src={props.imageUrl} />
      <p>{props.name}</p>
      <p>number: {props.number}</p>
    </Link>
  );
};

export default PokemonListItem;

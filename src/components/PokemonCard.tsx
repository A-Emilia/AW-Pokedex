import { Link } from "react-router-dom";
import type { PokedexListItem } from "../types/pokemon";

type Props = {
  pokemon: PokedexListItem;
};

/*
 * This is really the bulk of how to make things look pretty in the future.
 * Just need to change this to be a proper 'card'.
 * Also need to make it not stack vertically, but that should not be done here.
 */
export default function PokemonCard({ pokemon }: Props) {
  return (
    <div>
      <Link to={`/pokemon/${pokemon.name}`}>
        <p>#{pokemon.id} {pokemon.name}</p>
        {pokemon.sprite && (<img src={pokemon.sprite} alt={pokemon.name} />)}
      </Link>
    </div>
  );
}
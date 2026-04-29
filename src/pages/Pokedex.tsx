import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import { getPokemonList } from "../api/pokeapi";
import { mapPokedexListItem, type PokedexListItem } from "../types/pokemon";

const LIMIT = 20;
export default function Pokedex() {
  const [pokemonList, setPokemonList] = useState<PokedexListItem[]>([]);
  const [offset, setOffset] = useState(0);


  useEffect(() => {
    getPokemonList(offset, LIMIT)
      .then(data => {
        const mapped = data.results.map(mapPokedexListItem);
        setPokemonList(mapped)
      })
      .catch(err => console.log(err));
  }, [offset]);

  return (
    <div>
      <h1>Pokedex</h1>

      <div>
        {pokemonList.map((x) => (
          <PokemonCard key={x.name} pokemon={x} />
        ))}
      </div>

      <button onClick={() => setOffset(prev => Math.max(prev - LIMIT, 0))}>
        Previous
      </button>

      <button onClick={() => setOffset(prev => prev + LIMIT)}>
        Next
      </button>
    </div>
  );
}
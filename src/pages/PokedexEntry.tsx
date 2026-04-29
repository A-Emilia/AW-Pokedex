import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPokemon } from "../api/pokeapi";
import { mapPokemon, type Pokemon } from "../types/pokemon";

export default function PokedexEntry() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    if (!name) return;

    getPokemon(name)
      .then(data => setPokemon(mapPokemon(data)))
      .catch(err => console.error(err));
  }, [name]);

  if (!pokemon) return <p>Loading...</p>;

  return (
    <div>
      <h1>{pokemon.name}</h1>

      <img src={pokemon.sprite} alt={pokemon.name} />

      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>

      <h3>Types:</h3>
      <ul>
        {pokemon.types.map((x) => (
          <li key={x.type.name}>{x.type.name}</li>
        ))}
      </ul>

      <h3>Abilities:</h3>
      <ul>
        {pokemon.abilities.map((x) => (
          <li key={x.ability.name}>{x.ability.name}</li>
        ))}
      </ul>

      <h3>Stats:</h3>
      <ul>
        {pokemon.stats.map((x) => (
          <li key={x.stat.name}>
            {x.stat.name}: {x.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}
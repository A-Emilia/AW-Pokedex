export interface Pokemon {
    id: number;
    height: number;
    weight: number;
    name: string;
    sprite: string;
    stats: {
        base_stat: number;
        stat: { name: string };
    }[];
    types: {
        type: { name: string };
    }[];
    abilities: {
        ability: { name: string };
    }[];
}

export function mapPokemon(data: any): Pokemon {
  return {
    id: data.id,
    name: capitalizeFirstLetter(data.name),
    height: data.height,
    weight: data.weight,
    sprite: data.sprites.front_default,

    stats: data.stats.map((x: any) => ({
      base_stat: x.base_stat,
      stat: { name: x.stat.name },
    })),

    types: data.types.map((x: any) => ({
      type: { name: capitalizeFirstLetter(x.type.name) },
    })),

    abilities: data.abilities.map((x: any) => ({
      ability: { name: capitalizeFirstLetter(x.ability.name) },
    })),
  };
}

// This is still such a hack-as-fuck way to fix this minor issue, but I will take it.
function capitalizeFirstLetter(string: String) {
  return string.charAt(0).toUpperCase() + String(string).slice(1)
}

export interface PokedexListItem {
  name: string;
  id: number;
  sprite: string;
}

export function mapPokedexListItem(data: any): PokedexListItem {
  /*
   * Below is a sample result.
   * As I don't really want to spam the API with requests,
   * I have to manually extract and construct some of the values.
   * The idRegex matches on numbers encapsulated by two slashes.
   * Unless the API changes, this is fine.

    "results": [
    {
      "name": "spearow",
      "url": "https://pokeapi.co/api/v2/pokemon/21/"
    },
   */
  const idRegex = data.url.match(/\/(\d+)\/$/);
  if(!idRegex) {
    throw new Error("No Pokemon ID found.")
  }
  
  const pokemonId = Number(idRegex[1]);

  return {
    name: capitalizeFirstLetter(data.name),
    id: pokemonId,
    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
  }
}
const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

/*
 * Literally just a wrapper for the API requests so it's easier to change in the future.
 */

export async function getPokemonList(offset = 0, limit = 20) {
    const res = await fetch(`${BASE_URL}?offset=${offset}&limit=${limit}`);
    return res.json();
}

export async function getPokemon(name: string) {
    const res = await fetch(`${BASE_URL}/${name}`);
    return res.json();
}

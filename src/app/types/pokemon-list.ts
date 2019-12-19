export interface PokemonList {
  count: number;
  next: string;
  previous: string;
  results: Array<PokemonListResult>;
}

interface PokemonListResult {
  name: string;
  url: string;
}

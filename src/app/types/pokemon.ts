export interface Pokemon {
  abilities: Array<PokemonAbility>;
  base_experience: number;
  forms: Array<PokemonForm>;
  game_indices: Array<any>;
  height: number;
  held_items: Array<any>;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<any>;
  name: string;
  order: number;
  species: PokemonSpecies;
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
}

interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface PokemonForm {
  name: string;
  url: string;
}

interface PokemonSpecies {
  name: string;
  url: string;
}

interface PokemonType {
  slot: number;
  type: Array<any>;
}

interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface PokemonSprites {
  back_default: string;
  back_female: string;
  back_shiny_female: string;
  back_shiny: string;
  front_default: string;
  front_female: string;
  front_shiny_female: string;
  front_shiny: string;
}

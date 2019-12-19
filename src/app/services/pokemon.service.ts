import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pokemon } from '../types/pokemon';
import { PokemonList } from '../types/pokemon-list';

const BASE_URL = 'https://pokeapi.co/api/v2/';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  getPokemon(id: number): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(BASE_URL + 'pokemon/' + String(id));
  }

  getPokemonList(limit: number = 20, offset: number = 0): Observable<PokemonList> {
    const params = `?limit=${String(limit)}&offset=${String(offset)}`;
    return this.httpClient.get<PokemonList>(BASE_URL + 'pokemon' + params);
  }
}

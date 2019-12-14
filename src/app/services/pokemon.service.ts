import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../types/pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2/';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  getPokemon(id: number): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(BASE_URL + 'pokemon/' + String(id));
  }
}

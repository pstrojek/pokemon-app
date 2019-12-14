import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.service';
import { Pokemon } from './types/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pokemon-app';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.getPokemon(1).subscribe((pokemon: Pokemon) => {
      console.log(pokemon.name);
    });
  }
}

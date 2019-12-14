import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PokemonService } from './services/pokemon.service';
import { Pokemon } from './types/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Pokemon app';
  pokemonForm = new FormGroup({
    id: new FormControl('', [
      Validators.required
    ])
  });

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {}

  submitPokemon() {
    const pokemonId = this.pokemonForm.value.id;
    this.pokemonService.getPokemon(pokemonId).subscribe((pokemon: Pokemon) => {
      console.log(pokemon.name);
    });
  }
}

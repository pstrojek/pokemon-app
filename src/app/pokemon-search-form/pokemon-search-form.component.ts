import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../types/pokemon';

@Component({
  selector: 'app-pokemon-search-form',
  templateUrl: './pokemon-search-form.component.html',
  styleUrls: ['./pokemon-search-form.component.scss']
})
export class PokemonSearchFormComponent implements OnInit {
  pokemonForm = new FormGroup({
    id: new FormControl('', [
      Validators.required
    ])
  });

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
  }


  submitPokemon() {
    const pokemonId = this.pokemonForm.value.id;
    this.pokemonService.getPokemon(pokemonId).subscribe((pokemon: Pokemon) => {
      console.log(pokemon.name);
    });
  }

}

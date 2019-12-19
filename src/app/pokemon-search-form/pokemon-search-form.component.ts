import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-search-form',
  templateUrl: './pokemon-search-form.component.html',
  styleUrls: ['./pokemon-search-form.component.scss']
})
export class PokemonSearchFormComponent {
  pokemonForm = new FormGroup({
    id: new FormControl('', [
      Validators.required
    ])
  });

  constructor(private router: Router) {}

  submitPokemon() {
    const pokemonId = this.pokemonForm.value.id;
    this.router.navigate([`/pokemon/${pokemonId}`]);
  }
}

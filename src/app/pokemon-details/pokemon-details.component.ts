import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../types/pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  pokemon$: Observable<Pokemon>;
  currentPokemonId: number;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private router: Router
  ) {}

  ngOnInit() {
    this.pokemon$ = this.route.paramMap.pipe(
      tap((params: ParamMap) => this.currentPokemonId = Number(params.get('id'))),
      switchMap((params: ParamMap) =>
        this.pokemonService.getPokemon(Number(params.get('id'))))
    );
  }

  nextPokemon() {
    const nextPokemonId = this.currentPokemonId + 1;
    this.router.navigate([`/pokemon/${nextPokemonId}`]);
  }

  previousPokemon() {
    let previousPokemonId = this.currentPokemonId - 1;
    if (previousPokemonId < 1) {
      previousPokemonId = 1;
    }
    this.router.navigate([`/pokemon/${previousPokemonId}`]);
  }
}

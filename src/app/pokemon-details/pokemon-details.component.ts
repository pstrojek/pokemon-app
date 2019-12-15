import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../types/pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  pokemon$: Observable<Pokemon>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.pokemon$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.pokemonService.getPokemon(Number(params.get('id'))))
    );
  }

  goHome() {
    this.router.navigate(['/home']);
  }

}

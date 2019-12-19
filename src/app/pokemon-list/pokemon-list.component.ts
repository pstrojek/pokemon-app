import { Component, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { of as observableOf } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';

import { PokemonService } from '../services/pokemon.service';
import { PokemonList } from '../types/pokemon-list';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements AfterViewInit {
  displayedColumns: string[] = ['name'];
  tableData: PokemonList['results'];
  pageSize = 10;
  resultsLength = 0;
  isLoadingResults = true;
  isApiUnavailable = false;
  private maxPagesLimit = 10;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private pokemonService: PokemonService) {}

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        startWith({pageIndex: 0, pageSize: this.pageSize}),
        switchMap((paginator) => {
          const offset = paginator.pageIndex * this.paginator.pageSize;
          this.isLoadingResults = true;
          return this.pokemonService.getPokemonList(this.pageSize, offset);
        }),
        map(data => {
          this.isLoadingResults = false;
          this.isApiUnavailable = false;
          this.resultsLength = getCappedDataCount(data.count, this.maxPagesLimit, this.pageSize);

          return data.results;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          this.isApiUnavailable = true;
          return observableOf([]);
        })
      ).subscribe(data => this.tableData = data);
  }

  @HostListener('window:keydown.arrowright')
  nextPaginationPage() {
    this.paginator.nextPage();
  }

  @HostListener('window:keydown.arrowleft')
  previousPaginationPage() {
    this.paginator.previousPage();
  }
}

export function getCappedDataCount(dataCount: number, maxPagesLimit: number, pageSize: number): number {
  const maxDataCountSize = maxPagesLimit * pageSize;
  if (dataCount < maxDataCountSize) {
    return dataCount;
  } else {
    return maxDataCountSize;
  }
}

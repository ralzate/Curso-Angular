import { Component, OnInit } from '@angular/core';
import { Pokemons } from '../../services/pokemons';

@Component({
  selector: 'app-list-pokemons',
  standalone: true,
  imports: [],
  templateUrl: './list-pokemons.html',
  styleUrls: ['./list-pokemons.css'],
  providers: [Pokemons]
})
export class ListPokemons implements OnInit {
  pokemons: any[] = [];

  constructor(private pokemonService: Pokemons) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(
      data => this.pokemons = data,
      error => console.error('Error cargando pokemones', error)
    );
  }
}

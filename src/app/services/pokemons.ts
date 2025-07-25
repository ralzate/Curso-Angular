import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Pokemons {
  private apiUrl = 'https://calmcode.io/static/data/pokemon.json';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
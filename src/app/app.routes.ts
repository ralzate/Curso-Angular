import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { NotFound } from './pages/not-found/not-found';
import { JsonUsers } from './components/json-users/json-users';
import { ListPokemons } from './components/list-pokemons/list-pokemons';
import { GetApi } from './components/get-api/get-api';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'products', component: Products },
  { path: 'json-users', component: JsonUsers },
  { path: 'pokemons', component: ListPokemons },
  { path: 'apis', component: GetApi },
  { path: '**', component: NotFound }
];

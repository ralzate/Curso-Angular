import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  topics = [
    { title: 'Back', route: '/products', desc: 'Crear, editar y listar productos con API' },
    { title: 'API Externa', route: '/apis', desc: 'Consumo de varias APIs públicas con Angular' },
    { title: 'Pokemones', route: '/pokemons', desc: 'Listar pokemones usando servicios y observables' },
    { title: 'Usuarios JSON', route: '/json-users', desc: 'Explora JSONPlaceholder con HttpClient' },
    { title: 'Acerca', route: '/about', desc: 'Uso de Pipes, rutas dinámicas y navegación' },
    { title: 'Contacto', route: '/contact', desc: 'Trabaja con ngModel, ngSubmit y validación' }
  ];
}

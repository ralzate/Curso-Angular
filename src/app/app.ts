import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './pages/shared/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'courseAngular';
}

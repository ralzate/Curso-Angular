import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  name = '';
  message = '';

  enviar() {
    alert(`Gracias, ${this.name}, tu mensaje fue enviado.`);
    this.name = '';
    this.message = '';
  }
}

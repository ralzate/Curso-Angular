import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './products.html',
})
export class Products implements OnInit {
  baseUrl = 'http://localhost:8000/api/products';
  products: any[] = [];
  newProduct = { id: 0, name: '', description: '', price: 0 };
  editProduct: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.http.get<any[]>(this.baseUrl).subscribe(data => this.products = data);
  }

  addProduct() {
    this.http.post(this.baseUrl, this.newProduct).subscribe(() => {
      this.newProduct = { id: 0, name: '', description: '', price: 0 };
      this.loadProducts();
    });
  }


}

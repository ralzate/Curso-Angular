import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-json-users',
  standalone: true,
  imports: [],
  templateUrl: './json-users.html',
  styleUrls: ['./json-users.css']
})
export class JsonUsers implements OnInit {
  request = inject(HttpClient);
  jsonUsers: any[] = [];

  ngOnInit(): void {
    this.getJsonUsers();
  }

  getJsonUsers() {
    this.request.get("https://jsonplaceholder.typicode.com/users").subscribe((data: any) => {
      this.jsonUsers = data;
    });
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.html',
  styleUrls: ['./get-api.css']
})
export class GetApi implements OnInit {
  http = inject(HttpClient);
  userList: any[] = [];
  todoList: any[] = [];
  get_all_users: any[] = [];

  ngOnInit(): void {
    this.getUsers();
    this.getTodos();
    this.getExternalUsers();
  }

  getUsers() {
    this.http.get("https://jsonplaceholder.typicode.com/users")
      .subscribe((result: any) => this.userList = result);
  }

  getTodos() {
    this.http.get("https://jsonplaceholder.typicode.com/todos")
      .subscribe((result: any) => this.todoList = result);
  }

  getExternalUsers() {
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers")
      .subscribe((result: any) => this.get_all_users = result.data || []);
  }
}

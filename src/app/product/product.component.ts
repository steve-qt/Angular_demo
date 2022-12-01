import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'

interface JSP {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-product',
  template:`<h2>Product List</h2>
            <div id="display" *ngFor="let todo of todos">
              <div>User ID: {{todo.userId}} ID: {{todo.id}}</div>
              <div>Title: {{todo.title}}</div>
            </div>`,
  styles: ['div {margin-top:20px;margin-bottom:20px;}']
})

export class ProductComponent {
  todos!: JSP[];

  constructor(private http: HttpClient){}

  ngOnInit(){

    this.http.get<JSP[]>("https://jsonplaceholder.typicode.com/todos")
    .subscribe(result => this.todos = result);
  }

}


import { Component, OnInit } from '@angular/core';
import { todo } from 'src/app/models/todo';
import { __values } from 'tslib';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {


  todos!: todo[];

  inputTodo: string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
      content: 'First todo',
      completed: false
      },
      {
        content: 'Second todo',
        completed: true
      }
    ]
  }

  toggleDone(id: number){
    this.todos.map((val, curVal) => {
      if (curVal == id) val.completed = !val.completed;

      return val;
    })
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((val, curVal) => curVal !== id);
  }

  addTodo(){
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = ""
  }
}

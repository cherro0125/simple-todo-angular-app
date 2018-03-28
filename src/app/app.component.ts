import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo App';
  newTodo = '';
  todoList: Array<string> = [];
  isEdit = false;
  addTodo() {
    this.todoList.push(this.newTodo);
    this.newTodo = '';
    console.log(this.todoList);
  }
  deleteTodo(todo) {
    this.todoList = this.todoList.filter((e) => e !== todo);
    console.log('[Debug]Todo deleted: ' + todo);
  }

}

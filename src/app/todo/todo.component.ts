import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()
  todo: string;
  @Input()
  i: number;
  isEdited = false;

  @Output()
  TodoDelete: EventEmitter<string> = new EventEmitter();


  deleteTodo(t) {
    this.TodoDelete.emit(t);
  }
  constructor() { }

  ngOnInit() {
  }

}

import { CommonModule } from '@angular/common';
import { Component,EventEmitter, Input,Output } from '@angular/core';
import { Todo } from '../../interfaces/todo.model';
@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
@Input() todo: Todo ={
  task:'',
  completed: false,
  duration: 0,
  priority: 'NORMAL'
}

@Output() markComplete = new EventEmitter<Todo>(); //emits an event when the todo is marked complete
@Output() removeTodo = new EventEmitter<Todo>();//emits an event when the todo is removed
constructor(){}

onMarkAsComplete(){
  this.markComplete.emit(this.todo);
}

onRemoveTodo(){
  this.removeTodo.emit(this.todo);
}
}

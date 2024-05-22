import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './interfaces/todo.model';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TodoFormComponent,TodoItemComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todos: Todo[]=[];

addTodo(newTodo: Todo){
  console.log(newTodo)
  this.todos.push(newTodo)
}

removeTodo(todo: Todo){
  this.todos = this.todos.filter(t=>t !== todo);
}

markAsComplete(todo: Todo){
  const index = this.todos.findIndex(t => t === todo);
  if(index!== -1){
    this.todos[index].completed = !this.todos[index].completed;
  }
}


}

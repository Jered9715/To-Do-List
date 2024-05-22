import { Component,EventEmitter,Input,input,OnInit,Output } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { Todo } from '../../interfaces/todo.model';
@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent implements OnInit {

@Input() todo: Todo = {
task:'',
duration:0,
completed: false,
priority: 'NORMAL'
};

@Output() save = new EventEmitter<Todo>();
newTodo: Todo = this.todo;

task: string ="";
completed: boolean = false;
duration: number = 0;
priority: 'NORMAL'|'HIGH'|'LOW'= 'NORMAL';

constructor(){}


ngOnInit(): void {
  if(!this.todo){
    this.resetForm();
  }else{
    this.newTodo={...this.todo};
  }

}

onSubmit(form: NgForm){
  if(form.valid){
    this.todo.task = this.task;
    this.todo.completed = this.completed;
    this.todo.duration = this.duration;
    this.todo.priority= this.priority;
    this.save.emit(this.todo);
    form.reset();
    this.resetForm();
  }
}

resetForm(){
  this.todo={
    task:'',
    completed: false,
    duration: 0,
    priority: 'NORMAL'
  };

}

}

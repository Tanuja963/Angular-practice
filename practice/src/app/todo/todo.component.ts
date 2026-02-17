import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoForm!: FormGroup;
  tasks: any[] = [];

  constructor() { }

  ngOnInit() {
    this.todoForm = new FormGroup({
      taskName: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.minLength(10), Validators.maxLength(200)]),
      priority: new FormControl('Medium', Validators.required),
      dueDate: new FormControl('', Validators.required),
    });
  }
  onSubmit() {
    if (this.todoForm.valid) {
      this.tasks.push({
        id: this.tasks.length + 1,
        ...this.todoForm.value
      });
      this.todoForm.reset({ priority: 'Medium' });
    }
  }

  deleteTodo(index: number) {
  this.tasks.splice(index, 1);
  this.tasks.forEach((task, i) => {
    task.id = i + 1;
  });
}

}


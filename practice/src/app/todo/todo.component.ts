import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoForm!: FormGroup;
  tasks: any[] = [];

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.tasks));
  }

  loadTodos() {
    const saved = localStorage.getItem('todos');
    if (saved) {
      this.tasks = JSON.parse(saved);
    }
  }
  // ngOnInit() {
  //   this.loadTodos();
  //   this.todoForm = new FormGroup({
  //     taskName: new FormControl('', Validators.required),
  //     description: new FormControl('', [Validators.minLength(10), Validators.maxLength(200)]),
  //     priority: new FormControl('Medium', Validators.required),
  //     dueDate: new FormControl('', Validators.required),
  //   });
  // }
  ngOnInit() {
    this.loadTodos();
    this.todoForm = this.formBuilder.group({
      taskName: ['', Validators.required],
      description: ['', [Validators.minLength(10), Validators.maxLength(200)]],
      priority: ['Medium', Validators.required],
      dueDate: ['', Validators.required],
    });

  }
  onSubmit() {
    if (this.todoForm.valid) {
      this.tasks.push({
        id: this.tasks.length + 1,
        ...this.todoForm.value
      });
      this.saveTodos();
      this.todoForm.reset({ priority: 'Medium' });
    }
  }

  deleteTodo(index: number) {
    this.tasks.splice(index, 1);
    this.saveTodos();
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}


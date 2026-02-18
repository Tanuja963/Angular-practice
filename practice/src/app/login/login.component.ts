import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(userForm: NgForm) {
    if (userForm.valid) {
      console.log("logged in..");
      localStorage.setItem('isLoggedIn', 'true'); 
      this.router.navigate(['/todo']);
    }
  }
}

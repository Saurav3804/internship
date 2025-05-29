import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';


export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  user = {
    name: '',
    email: '',
    password: '',
    phone: ''
  }

  submitted = false;
    constructor(private userService: UserService) {}


  onSubmit() {
    this.submitted = true;
  }
}

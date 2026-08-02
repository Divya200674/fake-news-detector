import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {
  user = {
    name: '',
    email: '',
    password: ''
  };

  errorMessage: string = '';

  constructor(private router: Router) {}

  onRegister() {
    if (this.user.name && this.user.email && this.user.password) {
      this.router.navigate(['/login']);
    } else {
      this.errorMessage = 'Please fill in all fields.';
    }
  }
}
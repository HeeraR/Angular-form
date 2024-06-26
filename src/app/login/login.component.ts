import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  onLogin(): void {
    const usersFromStorage = localStorage.getItem('users');
    if (usersFromStorage) {
      const users: User[] = JSON.parse(usersFromStorage) as User[];
      const user = users.find(user => user.email === this.loginData.email && user.password === this.loginData.password);
      if (user) {
        alert('Login successful!');
        this.router.navigate(['/users']);
      } else {
        alert('Invalid email or password.');
      }
    } else {
      alert('No users found. Please register first.');
    }
  }
}

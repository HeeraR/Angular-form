import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  user: User = {
    fullName: '',
    email: '',
    password: '',
    dob: '',
    gender: '',
    interests: [],
    experience: 0
  };
  users: User[] = [];
  filteredUsers: User[] = [];

  ngOnInit(): void {
    const usersFromStorage = localStorage.getItem('users');
    if (usersFromStorage) {
      this.users = JSON.parse(usersFromStorage) as User[];
    }
    this.filteredUsers = [...this.users];
  }

  onSubmit(): void {
    if (this.users.some(user => user.fullName === this.user.fullName)) {
      alert('This name has already been registered. Please use a different name.');
      return;
    }

    if (this.users.some(user => user.email === this.user.email)) {
      alert('This email has already been registered. Please use a different email.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.user.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (this.user.dob) {
      const [year, month, day] = this.user.dob.split('-');
      this.user.dob = `${day}-${month}-${year}`;
    }

    this.users.push({ ...this.user });
    localStorage.setItem('users', JSON.stringify(this.users));
    this.filteredUsers = [...this.users];
    alert('Registration successful!');
    this.resetForm();
  }

  deleteUser(index: number): void {
    this.users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(this.users));
    this.filteredUsers = [...this.users];
  }

  filterUsers(gender: string, experienceRange: string): void {
    this.filteredUsers = this.users;

    if (gender !== 'All') {
      this.filteredUsers = this.filteredUsers.filter(user => user.gender === gender);
    }

    if (experienceRange !== 'All') {
      const [min, max] = experienceRange.split('-').map(Number);
      this.filteredUsers = this.filteredUsers.filter(user => user.experience >= min && user.experience <= max);
    }
  }

  resetForm(): void {
    this.user = {
      fullName: '',
      email: '',
      password: '',
      dob: '',
      gender: '',
      interests: [],
      experience: 0
    };
  }
}
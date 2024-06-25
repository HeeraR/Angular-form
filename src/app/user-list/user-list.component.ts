import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];

  ngOnInit(): void {
    const usersFromStorage = localStorage.getItem('users');
    if (usersFromStorage) {
      this.users = JSON.parse(usersFromStorage) as User[];
    }
    this.filteredUsers = [...this.users];
  }

  deleteUser(index: number): void {
    const confirmation = window.confirm('Are you sure you want to delete this user?');
    if (confirmation) {
      this.users.splice(index, 1);
      localStorage.setItem('users', JSON.stringify(this.users));
      this.filteredUsers = [...this.users];
    }
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
}

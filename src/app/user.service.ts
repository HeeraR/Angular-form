import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  constructor() {
    const usersFromStorage = localStorage.getItem('users');
    if (usersFromStorage) {
      this.users = JSON.parse(usersFromStorage) as User[];
    }
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User): void {
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  isUserExists(fullName: string, email: string): boolean {
    return this.users.some(user => user.fullName === fullName || user.email === email);
  }

  deleteUser(index: number): void {
    this.users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}

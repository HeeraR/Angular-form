
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';  

  user = {
    fullName: '',
    email: '',
    date: '',
    gender: '',
    interests: '',
    experience: 0 
  };

  onClick() {
    console.log('Button clicked!');  
  }

  onSubmit() {
    console.log('Form submitted:', this.user);  
  }
}


import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  staticUsers = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
  ];

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      const user = this.staticUsers.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (user) {
        alert('Login successful'); 
        this.router.navigate(['/dashboard']); 
      } else {
        const isRegistered = this.staticUsers.some((u) => u.email === formData.email);
        if (isRegistered) {
          alert('Invalid credentials');
        } else {
          this.router.navigate(['/register']); 
        }
      }
    }
  }
}



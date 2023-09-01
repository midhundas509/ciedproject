
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationSuccessful: boolean = false;

  constructor(private router: Router) { } 

  ngOnInit(): void {
  }

  register(): void {
    this.registrationSuccessful = true;

    if (this.registrationSuccessful) {
      this.router.navigate(['/dashboard']);
    }
  }
}


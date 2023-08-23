import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leads-menu',
  templateUrl: './leads-menu.component.html',
  styleUrls: ['./leads-menu.component.scss']
})
export class LeadsMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']); // Navigate to Dashboard Menu
  }

}

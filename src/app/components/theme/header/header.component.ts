

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeButton: string = 'dashboard'; 

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  onSearch() {
    
  }
  
  onAddLead() {
    
  }

  navigateToDashboardMenu() {
    
      this.activeButton = 'dashboard';
      this.router.navigate(['/dashboard-menu']);
    
  }
  
  navigateToLeadsMenu() {
    
      this.activeButton = 'leads';
      this.router.navigate(['/leads-menu']);
    
  }

  openSettings() {
    
  }

  logout() {
    this.router.navigate(['/login']);
  }

}







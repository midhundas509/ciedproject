// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })
// export class HeaderComponent implements OnInit {

//   activeButton: string = 'dashboard'; 
  

//   constructor(private router: Router) { }

//   ngOnInit(): void {

//   }

//   // onSearch(query: string) {

//   // }

  
//   onAddLead() {
//     // Handle add lead functionality here
//   }

//   navigateToDashboardMenu() {
    
//       this.activeButton = 'dashboard';
//       this.router.navigate(['/dashboard-menu']);
    
//   }
  
//   navigateToLeadsMenu() {
    
//       this.activeButton = 'leads';
//       this.router.navigate(['/leads-menu']);
    
//   }

//   openSettings() {
//     // Handle settings functionality here
//   }

//   logout() {
//     this.router.navigate(['/login']);
//   }

// }



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
    // this.dashboardMenu.filterBySearch(this.searchText); // Call the filterBySearch method in DashboardMenuComponent
  }


  
  onAddLead() {
    // Handle add lead functionality here
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
    // Handle settings functionality here
  }

  logout() {
    this.router.navigate(['/login']);
  }

}








import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.scss']
})
export class DashboardMenuComponent implements OnInit {

 
  searchText: string = '';
  filteredData: any[] = [];
  displayedData: any[] = [];
  selectedFilter: string = '';
  setFilter: string = '';
  stateCounts: { state: string; count: number }[] = [];
  probabilityCounts: { probability: string; count: number }[] = [];

  data = [
    { lead_name: 'Apple Inc', date_added: '28 Nov 2022', current_state: 'Contact mode', probability: 'Medium', team_size: '100-250 people', location: 'Netherlands', revenue: '1-5 Million', category: 'agriculture' },
    { lead_name: 'Samsung', date_added: '28 Nov 2022', current_state: 'Contact mode', probability: 'Low', team_size: '100-250 people', location: 'Netherlands', revenue: '1-5 Million', category: 'agriculture' },
    { lead_name: 'Facebook', date_added: '28 Nov 2022', current_state: 'Contact mode', probability: 'High', team_size: '100-250 people', location: 'Netherlands', revenue: '1-5 Million', category: 'agriculture' },
    { lead_name: 'Xiaomi', date_added: '28 Nov 2022', current_state: 'Contact mode', probability: 'Medium', team_size: '100-250 people', location: 'Netherlands', revenue: '1-5 Million', category: 'agriculture' },
    { lead_name: 'Chanel', date_added: '28 Nov 2022', current_state: 'Contact mode', probability: 'Low', team_size: '100-250 people', location: 'Netherlands', revenue: '1-5 Million', category: 'agriculture' },
    { lead_name: 'Nokia', date_added: '28 Nov 2022', current_state: 'Initial interest', probability: 'Medium', team_size: '100-250 people', location: 'Netherlands', revenue: '1-5 Million', category: 'agriculture' },
    { lead_name: 'HDFC', date_added: '28 Nov 2022', current_state: 'Initial interest', probability: 'Low', team_size: '100-250 people', location: 'Netherlands', revenue: '1-5 Million', category: 'agriculture' },
    { lead_name: 'Amazon', date_added: '28 Nov 2022', current_state: 'Initial interest', probability: 'High', team_size: '100-250 people', location: 'Netherlands', revenue: '1-5 Million', category: 'agriculture' },
    { lead_name: 'Flipkart', date_added: '28 Nov 2022', current_state: 'Initial interest', probability: 'Medium', team_size: '100-250 people', location: 'Netherlands', revenue: '1-5 Million', category: 'agriculture' },
    { lead_name: 'Olx', date_added: '28 Nov 2022', current_state: 'First Intro meeting', probability: 'Low', team_size: '100-250 people', location: 'Netherlands', revenue: '1-5 Million', category: 'agriculture' },{ lead_name: 'Apple Inc', date_added: '28 Nov 2022', current_state: 'Contact mode', probability: 'Medium', team_size: '100-250 people', location: 'Netherlands', revenue: '1-5 Million', category: 'agriculture' },
    { lead_name: 'Maruti', date_added: '28 Nov 2022', current_state: 'First Intro meeting', probability: 'Low', team_size: '100-250 people', location: 'Netherlands', revenue: '1-5 Million', category: 'agriculture' },
    { lead_name: 'Toyota', date_added: '28 Nov 2022', current_state: 'First Intro meeting', probability: 'High', team_size: '100-250 people', location: 'Netherlands', revenue: '1-5 Million', category: 'agriculture' },
    { lead_name: 'Yamaha', date_added: '28 Nov 2022', current_state: 'Follow up meeting', probability: 'Medium', team_size: '100-250 people', location: 'Netherlands', revenue: '1-5 Million', category: 'agriculture' },
    { lead_name: 'Kia', date_added: '28 Nov 2022', current_state: 'Follow up meeting', probability: 'Low', team_size: '100-250 people', location: 'Netherlands', revenue: '1-5 Million', category: 'agriculture' },
    { lead_name: 'Mahindra', date_added: '28 Nov 2022', current_state: 'Follow up meeting', probability: 'Medium', team_size: '100-250 people', location: 'Netherlands', revenue: '1-5 Million', category: 'agriculture' },
    { lead_name: 'TATA', date_added: '28 Nov 2022', current_state: 'Follow up meeting', probability: 'Low', team_size: '100-250 people', location: 'Netherlands', revenue: '1-5 Million', category: 'agriculture' },
    { lead_name: 'Hyundai', date_added: '28 Nov 2022', current_state: 'Workshop stage', probability: 'High', team_size: '100-250 people', location: 'Netherlands', revenue: '1-5 Million', category: 'agriculture' },
    { lead_name: 'Nissan', date_added: '28 Nov 2022', current_state: 'Workshop stage', probability: 'Medium', team_size: '100-250 people', location: 'Netherlands', revenue: '1-5 Million', category: 'agriculture' },
    { lead_name: 'BMW', date_added: '28 Nov 2022', current_state: 'Workshop stage', probability: 'Low', team_size: '100-250 people', location: 'Netherlands', revenue: '1-5 Million', category: 'agriculture' },
    
  ];

  constructor() {}

  ngOnInit(): void {


    this.setFilter = 'Active';
    this.selectedFilter = 'Contact mode';
    this.filteredData = [...this.data];
    this.updateDisplayedData();
    this.calculateStateCounts();
    this.calculateProbabilityCounts();
  }


  onSearch(query: string) {
    this.searchText = query;
    this.filterData();
    this.updateDisplayedData();
  }

  filterByState(state: string) {
    this.selectedFilter = state;
    this.filteredData = this.data.filter(item => item.current_state === state);
    this.updateDisplayedData();
  }

  filterData() {
    this.filteredData = this.data.filter(item =>
      item.lead_name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  updateDisplayedData() {
    this.displayedData = this.filteredData.slice(0, 5);
  }

  calculateStateCounts() {
    const stateCountsMap = new Map<string, number>();
    for (const item of this.filteredData) {
      if (stateCountsMap.has(item.current_state)) {
        stateCountsMap.set(
          item.current_state,
          stateCountsMap.get(item.current_state)! + 1
        );
      } else {
        stateCountsMap.set(item.current_state, 1);
      }
    }

    this.stateCounts = Array.from(stateCountsMap).map(([state, count]) => ({
      state,
      count,
    }));
  }

  calculateProbabilityCounts() {
    const probabilityCountsMap = new Map<string, number>();
    for (const item of this.filteredData) {
      if (probabilityCountsMap.has(item.probability)) {
        probabilityCountsMap.set(
          item.probability,
          probabilityCountsMap.get(item.probability)! + 1
        );
      } else {
        probabilityCountsMap.set(item.probability, 1);
      }
    }

    this.probabilityCounts = Array.from(probabilityCountsMap).map(
      ([probability, count]) => ({
        probability,
        count,
      })
    );
  }
  
  }
   





















import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  searchQuery: string = '';
  @Output() searchEvent = new EventEmitter<string>();

  searchLeads() {
    this.searchEvent.emit(this.searchQuery);
  }

}


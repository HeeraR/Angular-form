import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  @Output() filterChange: EventEmitter<{ gender: string, experienceRange: string }> = new EventEmitter();

  gender: string = 'All';
  experienceRange: string = 'All';
  filteredUsers: any[] | undefined;
  users: any;

  applyFilter(): void {
    this.filterChange.emit({ gender: this.gender, experienceRange: this.experienceRange });
  }
  

}

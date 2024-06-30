import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Output() filterChange: EventEmitter<{ gender: string, experienceRange: string }> = new EventEmitter();

  gender: string = 'All';
  experienceRange: string = 'All';

  applyFilter(): void {
    this.filterChange.emit({ gender: this.gender, experienceRange: this.experienceRange });
  }
}
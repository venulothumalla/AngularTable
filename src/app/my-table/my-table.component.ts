import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  entries = [
    { name: 'venu', dateOfJoin: '2024-04-21', role: 'Developer', designation: 'Software Engineer' },
    { name: 'Rakesh', dateOfJoin: '2024-04-27', role: 'Full Stack Developer', designation: 'Full Stack Developer' },
    { name: 'suresh', dateOfJoin: '2024-04-29', role: 'Manager', designation: 'Project Manager' },
    { name: 'jack', dateOfJoin: '2024-04-10', role: 'Angular Developer', designation: 'Angular Developer' },
    { name: 'Smith', dateOfJoin: '2024-04-15', role: 'Manager', designation: 'Project Manager' },
    { name: 'Jane', dateOfJoin: '2024-04-29', role: 'Tester', designation: 'Tester' },
    { name: 'lappy', dateOfJoin: '2024-04-29', role: 'Hr', designation: 'Hr' },
    { name: 'Anush', dateOfJoin: '2024-04-20', role: 'Full Stack Developer', designation: 'Full Stack Developer' },
    { name: 'Jane', dateOfJoin: '2024-04-12', role: 'Manager', designation: 'Project Manager' },
    { name: 'Smith', dateOfJoin: '2024-04-10', role: 'Developer', designation: 'Software Engineer' }
   
  ];

  filteredEntries = this.entries.slice(); // Initially, show all entries
  selectedRole: string = '';
  selectedDateOfJoin: string = '';
  selectedName: string = '';


  constructor() { }

  ngOnInit(): void {
  }

  filterEntries() {
    this.filteredEntries = this.entries.filter(entry =>
      (this.selectedRole ? entry.role === this.selectedRole : true) &&
      (this.selectedDateOfJoin ? entry.dateOfJoin === this.selectedDateOfJoin : true) &&
      (this.selectedName ? entry.name.toLowerCase().includes(this.selectedName.toLowerCase()) : true)
    );
  }
  shouldHighlight(role: string): boolean {
    return this.selectedRole === role;
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Impure1Pipe } from '../impure1.pipe';

@Component({
  selector: 'app-filter-users',
  imports: [CommonModule,Impure1Pipe],
  templateUrl: './filter-users.component.html',
  styleUrl: './filter-users.component.css'
})
export class FilterUsersComponent {

}
//5.00 tutorial #36

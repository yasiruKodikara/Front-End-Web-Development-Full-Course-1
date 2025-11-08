import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  menuItems = [
    {linkId: 1, linkName: 'Home'},
    {linkId: 2, linkName: 'Reminders'},
    {linkId: 3, linkName: 'Contacts'},
    {linkId: 4, linkName: 'About'},
  ];

  constructor(){}
  ngOnInit(): void{

  }


}

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
    li{
      cursor:pointer;
    };
    div{
      background-color: #D0ECE7;
    }
    `
  ]
})
export class SidebarComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

}

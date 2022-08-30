import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isFormOpen: boolean = true;

  constructor() { 
    console.log("HeaderComponent generated...");
    console.log("HeaderComponent initialization complete...");
  }

  ngOnInit(): void {
  }

}

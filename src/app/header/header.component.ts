import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navbarOpen = false;
  homePage = false;

  constructor() { }

  ngOnInit() {
    if(window.location.pathname === "/home") {
      this.homePage = true;
    }
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}

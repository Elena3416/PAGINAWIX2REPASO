import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public Menu: Array<string> = ["HOME" ,"PRODUCTOS", "ABOUT" , "CONTACT"];
 

  constructor() { }

  ngOnInit(): void {
  }
}
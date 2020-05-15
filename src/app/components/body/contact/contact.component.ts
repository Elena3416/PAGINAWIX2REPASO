import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public Contact: string = "For any questions, please send us a message";

  constructor() { }

  ngOnInit(): void {
  }

}

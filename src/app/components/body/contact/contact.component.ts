import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public Titulo: string = "For any questions, please send us a message";
  public Contactus: string = "Contact us ";
  public Telefono: string = "123-456-7890";
  public Email:string = "info@my-domain.com"; 

  constructor() { }

  ngOnInit(): void {
  }

}

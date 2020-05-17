import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  public Contact: string = "For any questions, please send us a message";

  constructor() { }

  ngOnInit(): void {
  }

}

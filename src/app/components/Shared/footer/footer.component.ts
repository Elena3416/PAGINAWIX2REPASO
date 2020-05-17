import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

  public Anio:number = new Date().getFullYear();
  public Desarrollo:string = "Page proudly created by Laura Rubalcava";
  public Consejos:string = "And Follow us to give them more advises";

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  public Titulo: string = "For any questions, please send us a message";
  public Contactus: string = "Contact us ";
  public Telefono: string = "123-456-7890";
  public Email:string = "info@my-domain.com"; 
  public Advise:string = "You should hurry shop";
  public Tienda:string = "SHOP STORE";
  public Texto:string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minime";
  public ForHim:string = "For Him";
  public ForHer:string = "For Her";
  public AllCards:string = "All Cards";
  public Seleccionar:string = " Shop Collection";


  constructor(private router:Router) {
  }
  
  public goColection(value){

    if(value == "0"){
      this.router.navigate(["productos-hombre"])
    }else if(value == "1"){
      this.router.navigate(["shopall"])
    }else if(value == "2"){
      this.router.navigate(["productos-mujer"])
    } 
  }

  ngOnInit(): void {
  }

}

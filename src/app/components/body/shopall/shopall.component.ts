import { Component, OnInit } from '@angular/core';
import {ProductsInterface} from "../../../Interfaces/Interfaces";
import { departments, products, brand} from 'src/app/DataEcomerce/data';
import { from } from "rxjs";
import {map, filter, tap} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shopall',
  templateUrl: './shopall.component.html',
  styleUrls: ['./shopall.component.css']
})
export class ShopallComponent implements OnInit {

  public AllClothes:Array<ProductsInterface> = [];
  public ShopAll:string = "Shop All";

  constructor() {
    this.GetAllProductos();
   }

  ngOnInit(): void {
  }

  public GetAllProductos(){

    let DepartamentoNiños = departments.find((departamento) => departamento.department === "Zapatería"); 

    from(products)
    .pipe(
      filter((producto) => producto.department === DepartamentoNiños.id),
      map((producto) => {
        let directionImg = `./../../../../assets/${producto.img}`;
        return{
          ...producto,
          img: directionImg,
        };
      }),
      tap((RopaActualizada) => this.AllClothes.push(RopaActualizada))
    ).subscribe();

  // public GetIdToChangeScreen(id:number){
  //   this.router.navigate(["descripcion-ropa-mujer", id]);
  // }
}

}
import { Component, OnInit } from '@angular/core';
import {ProductsInterface} from "../../../Interfaces/Interfaces";
import { departments, products, brand} from 'src/app/DataEcomerce/data';
import { from } from "rxjs";
import {map, filter, tap} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-productos-mujer',
  templateUrl: './productos-mujer.component.html',
  styleUrls: ['./productos-mujer.component.css']
})
export class ProductosMujerComponent implements OnInit {

  public WomenClothes:Array<ProductsInterface> = [];

  constructor(private router:Router) {
    this.GetProductos();
   }

  ngOnInit(): void {
  }

  public GetProductos(){

    let Departamento = departments.find((departamento) => departamento.department === "Ella"); 

    from(products)
    .pipe(
      filter((producto) => producto.department === Departamento.id),
      map((producto) => {
        let directionImg = `./../../../../assets/${producto.img}`;
        return{
          ...producto,
          img: directionImg,
        };
      }),
      tap((productoactualizado) => this.WomenClothes.push(productoactualizado))
    ).subscribe();
  }

  public GetIdToChangeScreen(id:number){
    this.router.navigate(["descripcion-ropa-mujer", id]);
  }
}

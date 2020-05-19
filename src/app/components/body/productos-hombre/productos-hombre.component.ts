import { Component, OnInit } from '@angular/core';
import { ProductsInterface } from 'src/app/Interfaces/Interfaces';
import { departments, products } from 'src/app/DataEcomerce/data';
import { from } from "rxjs";
import { filter, map, tap } from 'rxjs/operators';
import {Router} from "@angular/router";

@Component({
  selector: 'app-productos-hombre',
  templateUrl: './productos-hombre.component.html',
  styleUrls: ['./productos-hombre.component.css']
})

export class ProductosHombreComponent implements OnInit {

  public MenClothes: Array<ProductsInterface> = [];
  public Him:string = "For Him";

  constructor(private router:Router) {
    this.getProductos();
   }

  ngOnInit(): void {
  }

  public getProductos(){

    let Departamento = departments.find((departamento) => departamento.department === "Él"); 

    from(products)
    .pipe(
      filter((producto) => producto.department === Departamento.id),
      map((producto) => {
        let directionImg = `./../../../../assets/${producto.img}`;
        console.log(producto.img);
        
        return{
          ...producto,
          img: directionImg,
        };
      }),
      tap((productoactualizado) => this.MenClothes.push(productoactualizado))
    ).subscribe();

    console.log(this.MenClothes);
    
  }

  public GetIdToChangeScreen(id:number){
    this.router.navigate(["descripcion-ropa-hombre", id]);
  }
}

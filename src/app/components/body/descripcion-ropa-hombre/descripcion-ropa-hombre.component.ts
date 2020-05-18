import { Component, OnInit } from '@angular/core';
import {products} from "./../../../DataEcomerce/data";
import {ProductsInterface} from "./../../../Interfaces/Interfaces"
import { map, filter, pluck, switchMap} from "rxjs/operators";
import { from } from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-descripcion-ropa-hombre',
  templateUrl: './descripcion-ropa-hombre.component.html',
  styleUrls: ['./descripcion-ropa-hombre.component.css']
})
export class DescripcionRopaHombreComponent implements OnInit {

  public mostrar = false;
  public producto: ProductsInterface;

  constructor(private AR:ActivatedRoute) {
    window.scrollTo(0,0);
    this.AR.params.
    pipe(
      pluck('id'),
      switchMap((id) => this.ObtenerProductos(id)))
  .subscribe((valor) => this.producto = valor);
   }

  ngOnInit(): void {
  }

  public ObtenerProductos(id:number) {
    return from(products)
    .pipe(
      filter((producto) => producto.id == id),
      map((producto) => ({
        ...producto,
        img:`./../../../../assets/${producto.img}`,
      }))
    );
  }
}

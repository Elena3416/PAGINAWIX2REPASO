import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/Shared/navbar/navbar.component';
import { FooterComponent } from './components/Shared/footer/footer.component';
import { BodyComponent } from "./components/body/body.component";
import { ContactComponent } from './components/body/contact/contact.component';
import { AboutusComponent } from './components/body/aboutus/aboutus.component';
import { TarjetasComponent } from './components/body/tarjetas/tarjetas.component';
import { DescripcionRopaMujerComponent } from './components/body/descripcion-ropa-mujer/descripcion-ropa-mujer.component';
import { DescripcionRopaHombreComponent } from './components/body/descripcion-ropa-hombre/descripcion-ropa-hombre.component';
import { ProductosMujerComponent } from "./components/body/productos-mujer/productos-mujer.component";
import { ProductosHombreComponent } from "./components/body/productos-hombre/productos-hombre.component";
import { APP_Routes } from "./angular.routes";
import { NotfoundComponent } from './components/Shared/notfound/notfound.component';
import { ShopallComponent } from './components/body/shopall/shopall.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    ContactComponent,
    AboutusComponent,
    TarjetasComponent,
    DescripcionRopaMujerComponent,
    DescripcionRopaHombreComponent,
    ProductosMujerComponent,
    ProductosHombreComponent,
    NotfoundComponent,
    ShopallComponent,
  ],
  imports: [
    BrowserModule, APP_Routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BodyComponent } from "./components/body/body.component";
import { RouterModule, Routes } from '@angular/router';
import { TarjetasComponent } from './components/body/tarjetas/tarjetas.component';
import { ContactComponent } from './components/body/contact/contact.component';
import { AboutusComponent } from './components/body/aboutus/aboutus.component';
import { ProductosMujerComponent } from './components/body/productos-mujer/productos-mujer.component';
import { ProductosHombreComponent } from './components/body/productos-hombre/productos-hombre.component';
import { DescripcionRopaMujerComponent } from './components/body/descripcion-ropa-mujer/descripcion-ropa-mujer.component';
import { DescripcionRopaHombreComponent } from './components/body/descripcion-ropa-hombre/descripcion-ropa-hombre.component';
import { NotfoundComponent } from './components/Shared/notfound/notfound.component';
import { ShopallComponent } from "./components/body/shopall/shopall.component"

const Rutas: Routes = [
    { path: "", component: BodyComponent },
    { path: "tarjetas", component:TarjetasComponent},
    { path: "contacto", component:ContactComponent},
    { path: "aboutus", component:AboutusComponent},
    { path: "productos-mujer", component:ProductosMujerComponent},
    { path: "productos-hombre", component:ProductosHombreComponent},
    { path:"shopall", component:ShopallComponent },
    { path: "descripcion-ropa-mujer/:id", component:DescripcionRopaMujerComponent},
    { path: "descripcion-ropa-hombre/:id", component:DescripcionRopaHombreComponent},
    { path: "notFound", component:NotfoundComponent},
    { path: '**', pathMatch:'full', redirectTo: 'notFound'}
];

export const APP_Routes = RouterModule.forRoot(Rutas);
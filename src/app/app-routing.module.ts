import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleProductoComponent } from './products/detalle-producto/detalle-producto.component';
import { HomeComponent } from './home/home.component';
import { NopageComponent } from './nopage/nopage.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'products', component:ProductListComponent },
  { path: 'product/:id', component:DetalleProductoComponent },
  { path:'**', component:NopageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

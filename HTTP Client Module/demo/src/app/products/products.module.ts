import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDashboardComponent } from './products-dashboard/products-dashboard.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes:Routes=[
  {path:"", component:ProductsDashboardComponent}
]

@NgModule({
  declarations: [ProductsDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

  exports:[ProductsDashboardComponent]
})
export class ProductsModule { }

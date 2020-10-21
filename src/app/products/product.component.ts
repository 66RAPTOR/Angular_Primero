import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-product',
  template: `
    <h2>
      Name:
      <a [routerLink]="['/product', product.id]"> {{ product.name }} </a>
    </h2>

    <div>Precio: {{ product.price }}</div>
  `,
})
export class ProductComponent {

    @Input() product;

}
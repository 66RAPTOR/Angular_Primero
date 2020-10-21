import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../shared/data.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss'],
})
export class DetalleProductoComponent implements OnInit {
  public pro: any = {};
  constructor(
    private route: ActivatedRoute,
    private dataSvc: DataService,
    private location: Location
  ) {}

  ngOnInit(): void {
    /*Obtener el id del producto */
    const productId = this.route.snapshot.paramMap.get('id');

    /*Recupero el dato con un array */
    [this.pro] = this.pro = this.dataSvc.getProductById(productId);

    console.log('ProductId: ', productId);
  }

  /**
   * Un metodo
   */
  onGoBack(): void{
    this.location.back();
  }
}

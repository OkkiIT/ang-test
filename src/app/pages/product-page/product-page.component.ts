import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../models/products";
import {ModalService} from "../../services/modal.service";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  title: string = 'Test angular';
  loading: boolean = false
  products$: Observable<Product[]>
  term: string = ''

  constructor(
    public modalService: ModalService,
    public productsService: ProductsService
  ) {
  }

  ngOnInit(): void {
    this.productsService.getAll().subscribe(() => {
      this.loading = false
    })
  }
}

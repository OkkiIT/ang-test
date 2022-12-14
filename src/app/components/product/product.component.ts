import {Component, Input} from "@angular/core";
import {Product} from "../../models/products";

@Component({
  selector: 'app-product',
  templateUrl: 'product.component.html'
})
export class ProductComponent {
  @Input() product: Product

  details: boolean = false
}

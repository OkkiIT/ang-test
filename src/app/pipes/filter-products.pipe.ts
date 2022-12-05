import {Pipe, PipeTransform} from '@angular/core';
import {Product} from "../models/products";

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: Product[], search: string): Product[] {
    if (search.length === 0) return products
    return products.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
  }
}

import { CategoryService } from '../../../shared/services/category.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  @Input('category') category: string;
  categories$;

  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getCategorties();
  }

  ngOnInit() {
  }

}

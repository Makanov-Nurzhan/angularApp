import { CommonModule, NgClass, NgIf } from '@angular/common';
import { IProduct } from '../models/product';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgIf, NgClass, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product: IProduct;
  details = false;
}

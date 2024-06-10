import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { IProduct } from './models/product';
import { products as data } from './data/products';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Angular App';

  products: IProduct[] = []

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

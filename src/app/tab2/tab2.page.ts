import { CurrencyPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonSpinner,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [
    CurrencyPipe,
    NgIf,
    IonBadge,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonChip,
    IonContent,
    IonHeader,
    IonIcon,
    IonSpinner,
    IonTitle,
    IonToolbar
  ]
})
export class Tab2Page implements OnInit {
  products: Product[] = [];
  currentIndex = 0;
  loading = true;

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.productService.loadProducts().subscribe((products) => {
      this.products = products;
      this.loading = false;
    });
  }

  get currentProduct(): Product | undefined {
    return this.products[this.currentIndex];
  }

  previousProduct(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextProduct(): void {
    if (this.currentIndex < this.products.length - 1) {
      this.currentIndex++;
    }
  }
}

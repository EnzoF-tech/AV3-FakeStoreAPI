import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
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
  IonInput,
  IonItem,
  IonLabel,
  IonSpinner,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  standalone: true,
  imports: [
    CurrencyPipe,
    FormsModule,
    NgFor,
    NgIf,
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
    IonInput,
    IonItem,
    IonLabel,
    IonSpinner,
    IonTitle,
    IonToolbar
  ]
})
export class Tab3Page implements OnInit {
  products: Product[] = [];
  showAllProducts = false;
  loading = true;
  searchTerm = '';

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.productService.loadProducts().subscribe((products) => {
      this.products = products;
      this.loading = false;
    });
  }

  get filteredProducts(): Product[] {
    const term = this.searchTerm.trim().toLowerCase();

    if (!term) {
      return this.products;
    }

    return this.products.filter((product) =>
      `${product.title} ${product.category} ${product.description}`.toLowerCase().includes(term)
    );
  }

  showProducts(): void {
    this.showAllProducts = true;
  }

  hideProducts(): void {
    this.showAllProducts = false;
    this.searchTerm = '';
  }
}

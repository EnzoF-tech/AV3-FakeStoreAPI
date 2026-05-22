import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly apiUrl = 'https://fakestoreapi.com/products';
  private productList: Product[] = [];
  private readonly productsSubject = new BehaviorSubject<Product[]>([]);

  readonly products$ = this.productsSubject.asObservable();

  constructor(private readonly http: HttpClient) {}

  loadProducts(): Observable<Product[]> {
    if (this.productList.length > 0) {
      return of(this.productList);
    }

    return this.http.get<Product[]>(this.apiUrl).pipe(
      tap((products) => {
        this.productList = products;
        this.productsSubject.next(products);
      }),
      catchError((error) => {
        console.error('Erro ao buscar produtos da FakeStore API:', error);
        this.productList = [];
        this.productsSubject.next([]);
        return of([]);
      })
    );
  }

  get products(): Product[] {
    return this.productList;
  }

  getProductByIndex(index: number): Product | undefined {
    return this.productList[index];
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():string[]{
    return [
      '/assets/images/food/food-1.jpg',
      '/assets/images/food/food-2.jpg',
      '/assets/images/food/food-3.jpg',
      '/assets/images/food/food-4.jpg',
      '/assets/images/food/food-5.jpg',
      '/assets/images/food/food-6.jpg',
    ]
  }
}

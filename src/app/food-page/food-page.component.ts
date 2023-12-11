import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Food} from "../shared/models/food";
import {FoodService} from "../services/food/food.service";
import {CartService} from "../services/cart/cart.service";

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit{

  food!: Food
  constructor(private activateRoute: ActivatedRoute,
              private router:Router, private  foodService:FoodService, private  cartService:CartService) {
    this.activateRoute.params.subscribe(params=>{
      if(params['id']){
        this.food = this.foodService.getFoodById(+params['id'])

        console.log(this.food)
      }
    })
  }

  ngOnInit(): void {

  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart')
  }

}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Food} from "../shared/models/food";
import {FoodService} from "../services/food/food.service";

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit{

  food!: Food
  constructor(private activateRoute: ActivatedRoute, private  foodService:FoodService) {
    this.activateRoute.params.subscribe(params=>{
      if(params['id']){
        this.food = this.foodService.getFoodById(+params['id'])

        console.log(this.food)
      }
    })
  }

  ngOnInit(): void {

  }

}

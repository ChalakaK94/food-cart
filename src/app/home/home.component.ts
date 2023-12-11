import {Component, OnInit} from '@angular/core';
import {FoodService} from "../services/food/food.service";
import {Food} from "../shared/models/food";
import {StarRatingComponent} from "ng-starrating";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  foods:Food[] = []
  constructor(private  foodService:FoodService,private activateRoute :ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params=>{
      if(params['searchTerm']){
        this.foods = this.foodService.getAll().filter(food=>food.name.toLowerCase().includes(params['searchTerm']?.toLowerCase()) )

      }else  if(params['tag']){
        this.foods = this.foodService.getAllFoodByTag(params['tag']);
        console.log('tag', this.foods)
      }
      else {
        this.foods = this.foodService.getAll();
      }
    })

  }
}
